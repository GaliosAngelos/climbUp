const axios = require('axios');

// Replace with the actual endpoint of your server
const serverUrl = 'http://localhost:3000/query';

const query = {
  query: "SELECT * from climbup.climbing_halls" // Your SQL query
};

async function sendQuery() {
  try {
    const response = await axios.post(serverUrl, query);
    console.log('Query result:', response.data);
  } catch (error) {
    console.error('Error sending query:', error.message);
  }
}

sendQuery();
