const axios = require("axios").default;

const climberUrl = "http://35.193.105.8:3000/register_climber";
const hallownerUrl = "http://35.193.105.8:3000/register_hallowner";

//TODO: params mit null?
async function registerClimber(query, params) {
  try {
    return await axios.post(climberUrl, { query: query, params: params });
  } catch (err) {
    console.error("Error sending registry: ", err.response);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

async function registerHallowner(query, params) {
  try {
    return await axios.post(hallownerUrl, { query: query, params: params });
  } catch (err) {
    console.error("Error sending registry: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

module.exports = { registerClimber, registerHallowner };
