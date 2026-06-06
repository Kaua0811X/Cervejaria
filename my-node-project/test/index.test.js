const request = require('supertest');
const app = require('../src/index'); // Adjust the path if necessary

describe('API Endpoints', () => {
    it('should return a list of users', async () => {
        const response = await request(app).get('/api/users');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('users');
    });

    it('should create a new user', async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com' };
        const response = await request(app).post('/api/users').send(newUser);
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('user');
    });

    // Add more tests as needed
});