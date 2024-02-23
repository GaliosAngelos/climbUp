const express = require('express');
const { Client: SSHClient } = require('ssh2');
const { Client: PGClient } = require('pg');
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

let dbClient = null; // Gloabl Datenbankclient, initial null

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

async function safelyEndDbClient() {
    if (dbClient) {
        try {
            await dbClient.end();
            // dbClient.emit('close').
            console.log('Datenbankverbindung sauber geschlossen.');
        } catch (error) {
            console.error('Fehler beim Schließen der Datenbankverbindung:', error);
        } finally {
            dbClient = null; // Sicherstellen, dass dbClient zurückgesetzt wird
            console.log("dbClient zurückgesetzt");
        }
    }
}

app.post('/login', async (req, res) => {
    const { user, password } = req.body;
    if (dbClient){
        return res.status(200).send({ message: 'Bereits angemeldet' });
    }
    if (!user || !password) {
        return res.status(400).send({ message: 'Fehlende Anmeldedaten' });
    }

    try {
        if (!dbClient){
            dbClient = new PGClient({
                user: user,
                password: password,
                database: 'climbup',
                port: localPort,
                host: 'localhost',
            });
            await dbClient.connect();
        } else {
            dbClient.user  = user;
            dbClient.password = password;
            await dbClient.connect();
        }
        res.status(200).send({ message: 'Login erfolgreich' });
    } catch (error) {
        console.error('Fehler bei der Anmeldung:', error);
        res.status(500).send({ message: 'Anmeldefehler. Bitte versuchen Sie es erneut.' });
    }
});

app.post('/query', async (req, res) => {
    if(!dbClient){
        return res.status(401).send({ message: 'Nicht angemeldet. Bitte melden Sie sich erneut an.' });
    }
    try {
        const { query, params } = req.body;
        console.log(query, params);
        if (!query) {
            return res.status(400).send({ message: 'Abfragetext fehlt.' });
        }
        const result = params 
            ? await dbClient.query(query, params) // Für parameterisierte Anfragen
            : await dbClient.query(query); // Für Anfragen ohne Parameter
        res.json(result.rows);
    } catch (error) {
        console.error('Fehler bei der Datenbankabfrage:', error);
        res.status(500).send({ message: 'Fehler bei der Ausführung der Datenbankabfrage. Bitte melden Sie sich erneut an.' });
    }
});

app.post('/logout', async (req, res) => {
    if (!dbClient) {
        return res.status(401).send({ message: 'Nicht angemeldet. Bitte melden Sie sich erneut an.' });
    }

    try {
        // await safelyEndDbClient();
        dbClient.end();
        res.status(200).send({ message: 'Database connection successfully closed' });
    } catch (error) {
    console.error('Error occured while closing database connection: ', error);
    // await safelyEndDbClient(); // Im Fehlerfall Verbindung beenden
    res.status(500).send({ message: 'Error while closing database connection' });
    }
});

app.listen(port, () => {
    console.log(`HTTP server listening at http://localhost:${port}`);
});

process.on('SIGINT', () => {
    safelyEndDbClient().then(() => {
        console.log('Server shutting down.');
        process.exit();
    });
});

startSSHTunnelAndForwarding();

