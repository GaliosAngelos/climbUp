const axios = require('axios').default;

// Replace with the actual endpoint of your server
const loginUrl = 'http://localhost:3000/login';
const logoutUrl = 'http://localhost:3000/logout';

async function login (query) {
    try {
        return await axios.post(loginUrl, query);
    } catch (error) {
        console.error('Error sending query:', error.message);
        return {
            status: error.response ? error.response.status : 500,
            data: { message: error.message },
        };
    }
}

async function logout (query) {
    try {
        return await axios.post(logoutUrl, query);
    } catch (error) {
        console.error('Error sending query:', error.message);
        return {
            status: error.response ? error.response.status : 500,
            data: { message: error.message },
        };
    }
}


module.exports = { login, logout };