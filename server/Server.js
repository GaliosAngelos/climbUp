const express = require('express');
const { Client: SSHClient } = require('ssh2');
const { Pool, Client: PGClient } = require('pg');

const net = require('net');
const fs = require('fs');
const app = express();
const port = 3000;
app.use(express.json());

const localPort = 5433;
const sshConfig = {
    host: '35.193.105.8',
    username: 'michael_milke',
    privateKey: fs.readFileSync('id_rsa'),
};

const climberClients = new Map();
const hallownerClients = new Map();

// const dbadmin = new Pool({
//     user: 'dbadmin',
//     password: 'dbadmin',
//     database: 'climbup',
//     port: localPort,
//     host: 'localhost',
//     keepAlive: 'false',
// });

// !climberClients.has(dbadmin.user) ?  climberClients.set(dbadmin.user, dbadmin) : null ;
let dbClient = null; // Gloabl Datenbankclient, initial null
// climberClients.set("dbadmin", dbadmin);

function startSSHTunnelAndForwarding() {
    const sshClient = new SSHClient();
        sshClient.on('ready', () => {
            console.log('SSH Client Ready');
            sshClient.forwardOut('127.0.0.1', localPort, '127.0.0.1', 5432, (err, stream) => {
                if (err) {
                    console.log("Fehler beim Forwarding: " + err);
                }

                const server = net.createServer(sock => sock.pipe(stream).pipe(sock));
                server.listen(localPort, '127.0.0.1', () => {
                    console.log(`Local server listening on port ${localPort} for DB traffic forwarding`);
                });
            });
        }).on('error', (err) => {
            console.error('SSH Client Error:', err);
        }).connect(sshConfig);
}

async function endClient(){
  // if(dbClient?.connected  === true){
  //   return dbClient.end().then(() => {
  //     dbClient = null
  //   }).catch((err) => {
  //     console.error('Error occured during clientShutdown');
  //   });
  // } else {
  //   dbClient = null;
  //   return Promise.resolve('Client has been disconnected');
  // }
  await dbClient.end();
//   await climberClients.get(dbClient.name).end();
  dbClient = null;
}
function addClient(client, username, password){
    if(client === "hallowner"){
      if(!hallownerClients.has(username)){
        const hallownerClient = new PGClient({
            user: username,
            password: password,
            database: 'climbup',
            port: localPort,
            host: 'localhost',
            keepAlive: 'false',
        });
        hallownerClients.set(username, hallownerClient);
        return true;
        } else {
         return false;
      }
    } else if (client === "climber"){
        if(!climberClients.has(username)){
          const climberClient = new PGClient({
              user: username,
              password: password,
              database: 'climbup',
              port: localPort,
              host: 'localhost',
              keepAlive: 'false',
          });
          climberClients.set(username, climberClient);
          return climberClients.get(username);
        } else {
            return false;
        }
    }
}

app.post('/register_climber' , async (req, res) => {
    console.log(req.body);
    const { query, params } = req.body;
    const user = params[0];
    const password = params[1];
    const email = params[2];
    if (!user || !email || !password) {
        return res.status(400).send({ message: 'missing registry credentials' });
    }
    try {
      //TODO: Add functionality to add user in database! (Procedures)
        const client = "climber";
        const newClient = addClient(client, user, password );
        if(newClient === false){
            return res.status(403).send({ message: 'Choose another username. '});
        } else {
            dbClient = await dbadmin.connect();
            // await newClient.connect();
            await dbClient.query(query, params);
            dbClient.release();
            return res.status(201).send({message: 'Climber created. '});
        }
    } catch (err) {
        console.error('Error during registry request: ', err);
        await endClient();
        climberClients.delete(user);
        return res.status(500).send({ message: 'Registration Error. Please try again later.' });
    }
});

// app.post('/register_hallowner' , async (req, res) => {
//     const { user, email, password } = req.body;
//     if (!user || !email || !password) {        
//       return res.status(400).send({ message: 'Missing login credentials' });
//     }
//     try {
//         const client = "hallowner";
//         const result = addClient(client, user);
//         if(result === false){
//             return res.status(403).send({ message: 'User exists already'});
//         } else {
//             return res.status(201).send({message: 'User created'});
//         }
//     } catch (err) {
//         console.error('Error occured during registration process: ', err);
//         res.status(500).send({ message: 'Registration error. Please try again later.' });
//     }
// });

app.post('/login_climber', async (req, res) => {
    const { params } = req.body;
    const user = params[0];
    const password = params[1];
    if (!user || !password) {
        return res.status(400).send({ message: 'Missing login credentials' });
    }
    try {
      console.log("tries");
    //   let clients = climberClients.forEach((value, key) => { console.log(value, key);});
    //   for (let [key, values] of clients) {
    //     console.log(`Key: ${key}, Value: ${values.}`);
    // }
        let client = climberClients.get(user);
        if (client == undefined) {
          console.log("in undefined");
          const newClient = addClient("climber", user, password);
          newClient.connect();
          dbClient = newClient;
            // return res.status(403).send({ message: 'No matching credentials found' });
        } else {
        //   console.log("in not connected");
            // client.connect();
            dbClient = client;
        // } else if (client?.connected === true){
          // console.log("in is connected");
            // return res.status(200).send({ message: 'Already logged in' });
        }
        console.log("successful login");
        return res.status(200).send({ message: 'Login successful' });
    }catch (err) {
        console.error('Error occured during login process: ', err);
        await endClient();
        return res.status(500).send({ message: 'Login error. Please try again later.' });
    }
});

app.post('/login_hallowner', async (req, res) => {
    const { user, password } = req.body;
    if (!user || !password) {
        return res.status(400).send({ message: 'Missing login credentials' });
    }
    try {
        let client = hallownerClients.get(user);
        if (client === undefined) {
            return res.status(403).send({ message: 'No matching credentials found' });
        } else if (client.connected === false){
            client.connect();
            dbClient = client;
            return res.status(200).send({ message: 'Login successful' });
        } else if (client?.connected === true){
            return res.status(200).send({ message: 'Already logged in' });
        }
    }catch (err) {
        console.error('Error occured during login process: ', err);
        await endClient();
        return res.status(500).send({ message: 'Login error. Please try again later.' });
    }
});

app.post('/query', async (req, res) => {
    if(!dbClient){
        return res.status(401).send({ message: 'Not logged in. Please log in and try again.' });
    }
    try {
        const { query, params } = req.body;
        // console.log(query, params);
        if (!query) {
            return res.status(400).send({ message: 'Query is missing.' });
        }
        const result = params 
            ? await dbClient.query(query, params) // Für parameterisierte Anfragen
            : await dbClient.query(query); // Für Anfragen ohne Parameter
        res.json(result.rows);
    } catch (err) {
        console.error('Error during database request: ', err);
        res.status(500).send({ message: 'Error during  database request. Please try again later.' });
    }
});

app.post('/logout', async (req, res) => {
    if (!dbClient) {
        return res.status(401).send({ message: 'Not logged in.' });
    }
    try {
        await endClient();
        return res.status(200).send({ message: 'Database connection successfully closed.' });
    } catch (err) {
        console.error('Error occured while closing database connection: ', err);
        return res.status(500).send({ message: 'Error while closing database connection' });
    } finally {
        
        console.log("client ended");
    }
});

app.listen(port, () => {
    console.log(`HTTP server listening at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    endClient().then(() => {
        console.log('Server shutting down.');
        process.exit();
    });
});

startSSHTunnelAndForwarding();
