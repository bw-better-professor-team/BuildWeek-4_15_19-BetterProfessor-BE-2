const request = require('supertest')
const server = require('../api/server.js')

const db = require('../data/dbConfig.js')

beforeAll(() => {
  return db.seed.run();
});

describe('projects-router.js', () => {
  it('should run in a test environment', () => {
    expect(process.env.NODE_ENV).toEqual('test');
  });
  describe('GET /api/projects', () => {
    it('should respond with 200 OK', () => {
      return request(server)
      .get('/api/projects')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })
    it('should return a JSON object', () => {
      return request(server)
      .get('/api/projects')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('GET /api/projects/:id', () => {
    it('should return an id', () => {
      return request(server)
      .get('/api/projects/:id')
      .send({id: 2})
      .then(res => {
        expect(res.status).toBe(200)
      })
    })
  })

  describe('POST /api/projects', () => {
    it('should respond with 201 OK', () => {
      return request(server)
      .post('/api/projects')
      .send({project: 'Book store',
        project_deadline: '2019-07-07 23:59:59',
        feedback_deadline: '2019-07-07 23:59:59',
        recommendation_deadline: '2019-07-07 23:59:59'})
      .then(res => {
        expect(res.status).toBe(201)
      })
    })
    it('should return a JSON object', () => {
      return request(server)
      .post('/api/projects')
      .then(res => {
        expect(res.type).toBe('application/json')
      })
    })
  })

  describe('PUT /api/projects/:id', () => {
    it('should update an id', () => {
      return request(server)
      .put('/api/projects/1')
      .send({"project": "Angular Project",
        "project_deadline": "2019-09-09 23:59:59",
        "feedback_deadline": "2019-09-09 23:59:59",
        "recommendation_deadline": "2019-09-09 23:59:59"})
      .then(res => {
        expect(res.status).toBe(201)
      })
    })
  })

  describe('DELETE /api/projects/:id', () => {
    it('should delete an id', () => {
      return request(server)
      .delete('/api/projects/1')
      .then(res => {
        expect(res.status).toBe(204)
      })
    })
  })
})
