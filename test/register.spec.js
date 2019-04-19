const request = require('supertest')
const server = require('../api/server.js')

const db = require('../data/dbConfig.js')

beforeAll(() => {
  return db.seed.run();
});

describe('register-router.js', () => {
  describe('POST /api/register', () => {
    it('should respond with 201 OK', () => {
      return request(server)
      .post('/api/register')
      .send({username: "test", password: "pass"})
      .then(response => {
        expect(response.status).toBe(201)
      })
    })

  })

  describe('POST /api/register/login', () => {
    it('should respond with 200 OK', () => {
      return request(server)
      .post('/api/register/login')
      .send({username: "test", password: "pass"})
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
  })

})
