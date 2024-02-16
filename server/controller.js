// Client.js

class Client {
    constructor() {
      this.server = null;
    }
  
    connectToServer(server) {
      this.server = server;
      // Hier können Sie weitere Initialisierungen vornehmen, falls erforderlich
    }
  
    sendCommand(command) {
      if (!this.server) {
        console.error('Server connection is not established.');
        return;
      }
      
      this.server.writeToStream(command);
    }
  }
  
  module.exports = Client;
