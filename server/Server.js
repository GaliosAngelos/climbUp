const express = require('express');
const { Client: SSHClient } = require('ssh2');
const { Client: PGClient } = require('pg');
const net = require('net');
const fs = require('fs');
const app = express();
const port = 3000; // HTTP server port
let dbClient;
app.use(express.json()); // Middleware to parse JSON bodies

// Define local port for port forwarding
const localPort = 5433;

// SSH connection configuration
const sshConfig = {
    host: '35.193.105.8',
    username: 'michael_milke',
    privateKey: fs.readFileSync('id_rsa')
};

const sshClient = new SSHClient();

sshClient.on('ready', () => {
    console.log('SSH Client Ready');

    sshClient.forwardOut('127.0.0.1', localPort, '127.0.0.1', 5432, (err, stream) => {
        if (err) throw err;

        // Create local server that forwards database traffic
        const server = net.createServer(sock => {
            sock.pipe(stream).pipe(sock);
        });

        server.listen(localPort, '127.0.0.1', () => {
            console.log(`Local server listening on port ${localPort} for DB traffic forwarding`);

            // Now that SSH and local server are ready, start the HTTP server
            app.post('/login', async (req, res) => {
                const { user, password } = req.body;
                console.log(user, password);
                if (!user || !password) {
                    return res.status(400).send('Fehlende Anmeldedaten');
                }
            
                const dynamicDbConfig = {
                    user: user,
                    database: 'climbup',
                    password: password,
                    port: localPort,
                    host: 'localhost',
                };

                dbClient = new PGClient(dynamicDbConfig);
                try {
                    await dbClient.connect();
                    const dbRes = await dbClient.query('SELECT NOW()');
                    console.log('Abfrageergebnis:', dbRes.rows[0]);
                    res.status(200).send('Login erfolgreich');
                } catch (error) {
                    console.error('Datenbankfehler:', error);
                    res.status(500).send('Datenbankverbindungsfehler');
                } finally {
                    // await loginDbClient.end();
                }
            });
            
            app.post('/query', (req, res) => {
                const query = req.body.query; // Expecting SQL query in the request body
                console.log('DB-Anfrage: ', query);
                dbClient.query(query, (err, queryRes) => {
                    if (err) {
                        console.error('Database query error:', err);
                        res.status(500).send('Database query error');
                        // dbClient.end();
                        return;
                    }
                    res.json(queryRes.rows);
                });
            });

            app.listen(port, () => {
                console.log(`HTTP server listening at http://localhost:${port}`);
            });
        });
    });
}).connect(sshConfig);

// Handle process termination cleanly
process.on('SIGINT', () => {
    console.log('Terminating...');
    dbClient.end();
    sshClient.end();
    process.exit();
});
