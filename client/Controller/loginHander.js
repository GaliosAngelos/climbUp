const axios = require("axios").default;
nerUrl = "http://35.193.105.8:3000/login_hallowner";

const climberUrl = "http://35.193.105.8:3000/login_climber";
const hallownerUrl = "http://35.193.105.8:3000/login_hallowner";

async function loginClimber(params) {
  try {
    return await axios.post(climberUrl, { params: params });
  } catch (err) {
    console.error("Error sending climber login: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

async function loginHallowner(params) {
  try {
    return await axios.post(hallownerUrl, { params: params });
  } catch (err) {
    console.error("Error sending hallowner login: ", err.message);
    return {
      status: err.response ? err.response.status : 500,
      data: { message: err.message },
    };
  }
}

module.exports = { loginClimber, loginHallowner };
