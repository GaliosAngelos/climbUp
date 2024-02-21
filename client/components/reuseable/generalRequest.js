const axios = require('axios').default;

// Replace with the actual endpoint of your server
const serverUrl = 'http://localhost:3000/query';
const getHalls = 'SELECT * from climbup.climbing_halls';
async function sendQuery(queryKey) {
    try {
        if(queryKey === "getHalls"){
            const response = await axios.post(serverUrl, { query: getHalls });
        // Direktes Zurückgeben der Response, um den Status und Daten außerhalb zu handhaben
        return response;
        }
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

module.exports = { sendQuery };
