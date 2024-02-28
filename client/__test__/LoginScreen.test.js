
// __test__ for successful login
const { login, logout } = require('../components/request/loginLogoutRequest');

test('Login with valid credentials should return status 200', async () => {
    const response = await login({ user: 'testhall2', password: 'Testhall2' });
    expect(response.status).toBe(200);
});



// __test__ for failed login with invalid credentials
test('Login with invalid credentials should return status 400', async () => {
    const response = await login({ user: 'testhall2', password: 'Testhall' });
    expect(response.status).toBe(400);
});

// __test__ for successful logout
test('Logout should return status 200', async () => {
    const response = await logout({ user: 'testhall2' });
    expect(response.status).toBe(200);
});

// __test__ for failed logout with invalid user
test('Logout with invalid user should return status 400', async () => {
    const response = await logout({ user: 'testhall' });
    expect(response.status).toBe(400);
});

// __test__ for handling network errors in login function
test('Login function should handle network errors', async () => {
    // Mocking axios to simulate network error
    jest.mock('axios', () => ({
        post: jest.fn().mockRejectedValue(new Error('Network Error')),
    }));

    const response = await login({ user: 'testhall2', password: 'Testhall2' });
    expect(response.status).toBe(500); // Assuming status 500 for network errors
});

// __test__ for handling network errors in logout function
test('Logout function should handle network errors', async () => {
    // Mocking axios to simulate network error
    jest.mock('axios', () => ({
        post: jest.fn().mockRejectedValue(new Error('Network Error')),
    }));

    const response = await logout({ user: 'testhall2' });
    expect(response.status).toBe(500); // Assuming status 500 for network errors
});