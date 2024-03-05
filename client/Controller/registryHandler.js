const axios = require("axios").default;

const hallownerUrl = "http://localhost:3000/register_hallowner";
const climberUrl = "http://localhost:3000/register_climber";
// const hallownerUrl = "http://35.193.105.8:3000/register_hallowner";
// const climberUrl = "http://35.193.105.8:3000/register_climber";

async function registerClimber(verifyByName, insert, params) {
  try {
    return await axios.post(climberUrl, { verifyByName, insert, params });
  } catch (err) {
    console.error("Error sending registry: ", err.response);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

async function registerHallowner(verifyByName, insert, params) {
  try {
    return await axios.post(hallownerUrl, { verifyByName, insert, params });
  } catch (err) {
    console.error("Error sending registry: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

module.exports = { registerClimber, registerHallowner };
