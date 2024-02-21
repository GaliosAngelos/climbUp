const axios = require('axios').default;

// Replace with the actual endpoint of your server
const serverUrl = 'http://localhost:3000/login';

async function sendLogin (query) {
    try {
        const response = await axios.post(serverUrl, query);
        // Direktes Zurückgeben der Response, um den Status und Daten außerhalb zu handhaben
        return response;
    } catch (error) {
        // Bei Netzwerkfehlern oder anderen Problemen, die von axios gefangen werden,
        // geben Sie ein Objekt zurück, das den Fehler simuliert, um eine konsistente Handhabung zu ermöglichen
        console.error('Error sending query:', error.message);
        // Erzeugen eines Fehlerobjekts, das dem erwarteten Antwortformat entspricht
        return {
            status: error.response ? error.response.status : 500,
            data: error.message,
        };
    }
}

module.exports = { sendLogin };
