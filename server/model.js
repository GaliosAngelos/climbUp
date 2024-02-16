// Server.js
const { Client } = require('ssh2');
const net = require('net');

class Server {
  constructor(name, pw) {
    this.name = name;
    this.pw = pw;
    this.sshClient = new Client();
    this.stream = null; // SSH-Stream speichern
  }

  connect() {
    const sshConfig = {
      host: '35.193.105.8',
      port: 22, 
      username: 'michael_milke',
      privateKey: require('fs').readFileSync('./id_rsa'),
    };

    this.sshClient.on('ready', () => {
      console.log('SSH connection established');

      this.sshClient.shell((err, stream) => {
        if (err) {
          console.error('Error starting shell:', err);
          return this.sshClient.end();
        }

        this.stream = stream; // SSH-Stream speichern

        stream.on('data', (data) => {
          const output = data.toString();
          console.log(output);
          // Verarbeitung der empfangenen Daten
        });

        stream.stderr.on('data', (data) => {
          const error = data.toString();
          console.error('Error:', error);
          // Verarbeitung des Fehlers
        });

        stream.on('close', () => {
          console.log('Shell session closed');
          this.sshClient.end();
        });

        const password = 'dbadmin';
        const command = `PGPASSWORD=${this.pw} psql -U ${this.name} -d climbup\n`;

        stream.write(command);
      });
    });

    this.sshClient.on('error', (err) => {
      console.error('SSH connection error:', err);
    });

    this.sshClient.connect(sshConfig);
  }

  writeToStream(input) {
    if (!this.stream) {
      console.error('SSH stream is not available.');
      return;
    }

    this.stream.write(input + '\n');
  }

  closeConnection() {
    this.sshClient.end(); // Close the SSH connection
  }
}

module.exports = Server;

