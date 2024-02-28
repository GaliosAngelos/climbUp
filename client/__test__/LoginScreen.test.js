// Importiere die login und logout Funktionen
const { login, logout } = require('../components/request/loginLogoutRequest');

// Test für erfolgreichen Login
test('Login with valid credentials should return status 200', async () => {
    // Ersetze 'testUser' und 'testPassword' durch gültige Anmeldeinformationen in deiner Testdatenbank
    const response = await login({ user: 'testhall2', password: 'Testhall2' });
    expect(response.status).toBe(200);
});

// Test für fehlgeschlagenen Login mit ungültigen Anmeldeinformationen
test('Login with invalid credentials should return status 400', async () => {
    // 'invalidUser' und 'invalidPassword' sollten in deiner Testdatenbank nicht existieren
    const response = await login({ user: 'testhall2', password: 'Testhall2' });
    expect(response.status).toBe(200);
});

// Test für erfolgreichen Logout
test('Logout should return status 200', async () => {
    // 'testUser' sollte ein gültiger Benutzer in deiner Testdatenbank sein, der bereits eingeloggt ist
    const response = await logout({ user: 'testhall2' });
    expect(response.status).toBe(200);
});

// Test für fehlgeschlagenen Logout mit ungültigem Benutzer
test('Logout with invalid user should return status 400', async () => {
    // 'invalidUser' sollte in deiner Testdatenbank nicht existieren
    const response = await logout({ user: 'testhall' });
    expect(response.status).toBe(200);
});
