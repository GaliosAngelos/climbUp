const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');
const { loginClimber, loginHallowner } = require('../Controller/loginHander'); // Pfad entsprechend anpassen

describe('Login Functions', () => {
    const mock = new MockAdapter(axios);
    const climberParams = ['climberUser', 'climberPass'];
    const hallownerParams = ['hallownerUser', 'hallownerPass'];

    afterEach(() => {
        mock.reset();
    });

    it('should login climber successfully', async () => {
        mock.onPost('http://localhost:3000/login_climber').reply(200, { message: 'Login successful' });
        const response = await loginClimber(climberParams);
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ message: 'Login successful' });
    });

    it('should handle climber login error', async () => {
        mock.onPost('http://localhost:3000/login_climber').networkError();
        const response = await loginClimber(climberParams);
        expect(response.status).toBe(500);
        expect(response.data.message).toBe('Network Error');
    });

    it('should login hallowner successfully', async () => {
        mock.onPost('http://localhost:3000/login_hallowner').reply(200, { message: 'Login successful' });
        const response = await loginHallowner(hallownerParams);
        expect(response.status).toBe(200);
        expect(response.data).toEqual({ message: 'Login successful' });
    });

    it('should handle hallowner login error', async () => {
        mock.onPost('http://localhost:3000/login_hallowner').networkError();
        const response = await loginHallowner(hallownerParams);
        expect(response.status).toBe(500);
        expect(response.data.message).toBe('Network Error');
    });
});
