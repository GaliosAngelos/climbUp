const express = require("express");
const { Client: SSHClient } = require("ssh2");
const { Pool, Client: PGClient } = require("pg");
const net = require("net");
const fs = require("fs");
const app = express();
const port = 3000;
app.use(express.json());

const localPort = 5433;
const sshConfig = {
  host: "35.193.105.8",
  username: "michael_milke",
  privateKey: fs.readFileSync("id_rsa"),
};

let climberClients = new Map();
let hallownerClients = new Map();
let sshClientGlobal = null; // Globale Variable für den SSH-Client
let localServer = null; // Globale Variable für den lokalen Server

function startSSHTunnelAndForwarding() {
  const sshClient = new SSHClient();
  sshClient
    .on("ready", () => {
      console.log("SSH Client Ready");
      sshClient.forwardOut(
        "127.0.0.1",
        localPort,
        "127.0.0.1",
        5432,
        (err, stream) => {
          if (err) {
            console.log("Fehler beim Forwarding: " + err);
          }

          localServer = net.createServer((sock) =>
            sock.pipe(stream).pipe(sock)
          );
          localServer.listen(localPort, "127.0.0.1", () => {
            console.log(
              `Local server listening on port ${localPort} for DB traffic forwarding`
            );
          });
        }
      );
    })
    .on("error", (err) => {
      console.error("SSH Client Error:", err);
    })
    .connect(sshConfig);
  sshClientGlobal = sshClient; // Aktualisieren der globalen Variable mit dem aktuellen SSH-Client
}
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
async function endClientAndRestartSSHTunnel(restart) {
  // Beenden des PostgreSQL-Clients, falls vorhanden
  if (dbClient) {
    await dbClient.end();
    dbClient = null;
    climberClients = new Map();
    hallownerClients = new Map();
    console.log("PostgreSQL client closed.");
  }

  // Beenden des SSH-Clients und Neustarten des Tunnels
  if (sshClientGlobal) {
    // Schließen des lokalen Servers, falls vorhanden
    if (localServer) {
      localServer.close(() => {
        console.log("Local server closed.");
      });
    }

    sshClientGlobal.end(); // Beenden des aktuellen SSH-Clients
    console.log("SSH client closed.");
    sshClientGlobal = null; // Zurücksetzen der globalen Variable

    if (restart) {
      // Kurze Verzögerung, um sicherzustellen, dass der SSH-Client vollständig beendet wurde
      setTimeout(() => {
        startSSHTunnelAndForwarding(); // Neustart des SSH-Tunnels
        console.log("SSH tunnel restarted.");
      }, 100); // Verzögerung von 200 Millisekunden
    }
  }
}

function addClient(client, username, password) {
  if (client === "hallowner") {
    if (!hallownerClients.has(username)) {
      const hallownerClient = new PGClient({
        user: username,
        password: password,
        database: "climbup",
        port: localPort,
        host: "localhost",
        keepAlive: "false",
      });
      hallownerClients.set(username, hallownerClient);
      return hallownerClients.get(username);
    } else {
      return false;
    }
  } else if (client === "climber") {
    if (!climberClients.has(username)) {
      const climberClient = new PGClient({
        user: username,
        password: password,
        database: "climbup",
        port: localPort,
        host: "localhost",
        keepAlive: "false",
      });
      climberClients.set(username, climberClient);
      return climberClients.get(username);
    } else {
      return false;
    }
  }
}

app.post("/register_climber", async (req, res) => {
  console.log(req.body);
  const { query, params } = req.body;
  const user = params[0];
  const password = params[1];
  const email = params[2];
  if (!user || !email || !password) {
    return res.status(400).send({ message: "missing registry credentials" });
  }
  try {
    //TODO: Add functionality to add user in database! (Procedures)
    const client = "climber";
    const dbadmin = {user: 'dbadmin',  password:'dbadmin'};
    const  adminClient = addClient(client, dbadmin.user, dbadmin.password);
    const newClient = addClient(client, user, password);
    // if (newClient === false) {
    //   return res.status(403).send({ message: "Choose another username. " });
    // } else {

      await adminClient.connect();

      // await newClient.connect();
      await dbClient.query(query, params);
      dbClient.release();
      return res.status(201).send({ message: "Climber created. " });
    // }
  } catch (err) {
    console.error("Error during registry request: ", err);
    await endClientAndRestartSSHTunnel(true);
    climberClients.delete(user);
    return res
      .status(500)
      .send({ message: "Registration Error. Please try again later." });
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

app.post("/login_climber", async (req, res) => {
  const { params } = req.body;
  const user = params[0];
  const password = params[1];
  if (!user || !password) {
    return res.status(400).send({ message: "Missing login credentials" });
  }
  try {
    let client = climberClients.get(user);
    if (client == undefined) {
      console.log("in undefined");
      const newClient = addClient("climber", user, password);
      await newClient.connect();
      dbClient = newClient;
      // return res.status(403).send({ message: 'No matching credentials found' });
    } else {
      //   console.log("in not connected");
      client.connect();
      dbClient = client;
      // } else if (client?.connected === true){
      // console.log("in is connected");
      // return res.status(200).send({ message: 'Already logged in' });
    }
    console.log("successful login");
    return res.status(200).send({ message: "Login successful" });
  } catch (err) {
    console.error("Error occured during login process: ", err);
    await endClientAndRestartSSHTunnel(true);
    return res
      .status(500)
      .send({ message: "Login error. Please try again later." });
  }
});

app.post("/login_hallowner", async (req, res) => {
  const { params } = req.body;
  const user = params[0];
  const password = params[1];
  if (!user || !password) {
    return res.status(400).send({ message: "Missing login credentials" });
  }
  try {
    console.log("tries hallowner login");
    let client = hallownerClients.get(user);
    if (client === undefined) {
      console.log("in undefined");
      const hallowner = addClient("hallowner", user, password);
      await hallowner.connect();
      dbClient = hallowner;
      // return res.status(403).send({ message: 'No matching credentials found' });
    } else {
      client.connect();
      dbClient = client;
      // } else if (client?.connected === true){
      // return res.status(200).send({ message: 'Already logged in' });
    }
    console.log("successful login");
    return res.status(200).send({ message: "Login successful" });
  } catch (err) {
    console.error("Error occured during login process: ", err);
    await endClientAndRestartSSHTunnel(true);
    return res
      .status(500)
      .send({ message: "Login error. Please try again later." });
  }
});

app.post("/query", async (req, res) => {
  if (!dbClient) {
    return res
      .status(401)
      .send({ message: "Not logged in. Please log in and try again." });
  }
  try {
    const { query, params } = req.body;
    console.log(query, params);
    if (!query) {
      return res.status(400).send({ message: "Query is missing." });
    }
    const result = params
      ? await dbClient.query(query, params) // Für parameterisierte Anfragen
      : await dbClient.query(query); // Für Anfragen ohne Parameter

    res.status(200).send({
      message: "Query executed successfully.",
      data: result.rows,
    });
  } catch (err) {
    console.error("Error during database request: ", err);
    res.status(500).send({
      message: "Error during  database request. Please try again later.",
    });
  }
});

app.post("/logout", async (req, res) => {
  try {
    await endClientAndRestartSSHTunnel(true);
    return res.status(200).send({
      message:
        "Logout successful. Database and SSH connections have been reset.",
    });
  } catch (err) {
    console.error("Error occurred while processing logout:", err);
    return res
      .status(500)
      .send({ message: "An error occurred during logout. Please try again." });
  }
});

app.listen(port, () => {
  console.log(`HTTP server listening at http://localhost:${port}`);
});

process.on("SIGINT", () => {
  endClientAndRestartSSHTunnel(false).then(() => {
    console.log("Server shutting down.");
    process.exit();
  });
});

startSSHTunnelAndForwarding();
