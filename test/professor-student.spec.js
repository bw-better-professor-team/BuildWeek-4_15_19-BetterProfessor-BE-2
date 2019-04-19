const request = require('supertest')
const server = require('../api/server.js')

const db = require('../data/dbConfig.js')

beforeAll(() => {
  return db.seed.run();
});

describe('professor-student-router.js', () => {
  describe('GET /professors-students', () => {
    it('should return JSON', () => {
      return request(server)
      .get('/api/professors-students')
      .then(response => {
        expect(response.type).toBe('application/json')
      })
    })
  })
})
