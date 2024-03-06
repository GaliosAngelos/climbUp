// Import axios for making HTTP requests
const axios = require("axios").default;

// Define URLs for login endpoint
const climberUrl = "http://35.193.105.8:3000/login_climber";
const hallownerUrl = "http://35.193.105.8:3000/login_hallowner";

// Asynchronous function to login a climber using provided parameters
async function loginClimber(params) {
  try {
    return await axios.post(climberUrl, { params: params });
  } catch (err) {
    console.log("Error sending climber login: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

// Asynchronous function to login a hall owner using provided parameters
async function loginHallowner(params) {
  try {
    return await axios.post(hallownerUrl, { params: params });
  } catch (err) {
    console.log("Error sending hallowner login: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

module.exports = { loginClimber, loginHallowner };
