const axios = require('axios').default;

const climberUrl = 'http://localhost:3000/login_climber';
const hallownerUrl = 'http://localhost:3000/login_hallowner';

async function loginClimber (params) {
    try {
        return await axios.post(climberUrl, { params: params });
    } catch (err) {
        console.error('Error sending login: ', err.message );
        return {
            status: err.response ? err.response.status : 500,
            data: { message: err.message },
        };
    }
}

async function loginHallowner (params) {
    try {
        return await axios.post(hallownerUrl, { params: params });
    } catch (err) {
        console.error('Error sending login: ', err.message );
        return {
            status: err.response ? err.response.status : 500,
            data: { message: err.message },
        };
    }
}

module.exports = { loginClimber, loginHallowner };