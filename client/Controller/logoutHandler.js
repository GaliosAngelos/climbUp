const axios = require("axios").default;

// Replace with the actual endpoint of your server

const logoutUrl = "http://localhost:3000/logout";
// const logoutUrl = "http://35.193.105.8:3000/logout";

async function logout(query) {
  try {
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
