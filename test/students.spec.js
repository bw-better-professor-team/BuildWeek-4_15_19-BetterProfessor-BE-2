const request = require('supertest')
const server = require('../api/server.js')

const db = require('../data/dbConfig.js')

beforeAll(() => {
  return db.seed.run();
});

describe('students-router.js', () => {
  describe('GET /api/students', () => {
    it('should return a status of 200', () => {
      return request(server)
      .get('/api/students')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
    it('should return a JSON', () => {
      return request(server)
      .get('/api/students')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('GET /api/students/:id', () => {
    it('should return 200 status', () => {
      return request(server)
      .get('/api/students/:id')
      .send({id: 1})
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })

  describe('POST /api/students', () => {
    it('should return 201 status', () => {
      return request(server)
      .post('/api/students')
      .send({student_name: 'Tillman', email: 'Nicklaus_Morar40@yahoo.com'})
      .then(res => {
        expect(res.status).toBe(201)
      })
    })
    it('should return a JSON', () => {
      return request(server)
      .post('/api/students')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('PUT /api/students/:id', () => {
    it('should return 200 status', () => {
      return request(server)
      .put('/api/students/1')
      .send({student_name: 'Diana', email: 'Diana@yahoo.com'})
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })

  describe('DELETE /api/students/:id', () => {
    it('should return 204 status', () => {
      return request(server)
      .delete('/api/students/2')
      .then(res => {
        expect(res.status).toBe(204)
      })
    })
  })
})
