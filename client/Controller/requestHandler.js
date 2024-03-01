const axios = require('axios').default;

// Replace with the actual endpoint of your server
const queryUrl = 'http://localhost:3000/query';

async function query (query, params) {
    try {
        const request = params ? { query: query, params: params } : { query: query };
        return await axios.post(queryUrl, request);
    } catch (err) {
        console.error('Error sending query:', err.message);
        return {
            status: err.response ? err.response.status : 500,
            data: { message: err.message },
        };
    }
}

module.exports = { query };