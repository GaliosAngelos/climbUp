const axios = require("axios").default;

// Logout endpoint URL (replace with your actual server endpoint)
const logoutUrl = "http://35.193.105.8:3000/logout";

// Asynchronous logout function accepting a query parameter
async function logout(query) {
  try {
    // Attempt to send a POST request to the logout URL with the query
    return await axios.post(logoutUrl, query);
  } catch (err) {
    console.error("Error sending query:", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

module.exports = { logout };
