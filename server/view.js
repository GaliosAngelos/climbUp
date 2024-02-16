// Beispielverwendung des Clients
const Client = require('./controller');
const Server = require('./model');
// const Client = requrie('pg');

const server = new Server('dbadmin', 'dbadmin');
const client = new Client();

server.connect(); // Verbindung zum Server herstellen
setTimeout(() => {
    client.connectToServer(server); // Verbindung zum Server im Client festlegen
}, 3000);
setTimeout(() => {
    client.sendCommand('SELECT * FROM climbup.climbing_halls;\n');
    client.sendCommand('SELECT * FROM climbup.routes_hall9;\n');
    // client.sendCommand('CALL get_routes_by_hall_name(\'hall9\');');
}, 5000);
// Befehle senden
setTimeout(() => {
    server.closeConnection();
    console.log("connection closed");
}, 8000);

// client.query('CALL get_routes_by_hall_name(\'hall9\')', (err, res) => {
//     if (err) {
//       console.error('Error executing query:', err);
//       return;
//     }
//     console.log('Query result:', res.rows);
//     client.end(); // Close the connection
//   });
