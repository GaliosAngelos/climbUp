const axios = require('axios').default;

// Replace with the actual endpoint of your server
const queryUrl = 'http://localhost:3000/query';
async function query (queryText, params = null) {
    try {
        const requestBody = params ? { query: queryText, params } : { query: queryText };
        return await axios.post(queryUrl, requestBody);
    } catch (error) {
        console.error('Error sending query:', error.message);
        return {
            status: error.response ? error.response.status : 500,
            data: { message: error.message },
        };
    }
}

module.exports = { query };
