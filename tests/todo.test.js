const request = require('supertest');
const app = require('../src/app');

describe('POST /todo', () => {
  it('should create a new todo', async () => {
    const res = await request(app)
      .post('/todo')
      .send({
        task: 'Belajar TDD'
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body).toHaveProperty('task', 'Belajar TDD');
  });

  it('should fail if task is missing', async () => {
    const res = await request(app)
      .post('/todo')
      .send({});

    expect(res.statusCode).toBe(400);
    expect(res.body).toHaveProperty('error');
  });
});
