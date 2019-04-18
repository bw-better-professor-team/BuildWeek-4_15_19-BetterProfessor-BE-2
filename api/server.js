require('dotenv').config()
const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')
const db = require('../data/dbConfig.js')
const restricted = require('./restricted.js');

const registerRouter = require('../routes/register-router.js')
//const userRouter = require('../routes/user-router.js')
const studentsRouter = require('../routes/students-router.js')
const projectsRouter = require('../routes/projects-router.js')
const professorStudentRouter = require('../routes/professor-student-router.js')

server.use(helmet())
server.use(express.json())
server.use(cors())


server.use('/api/register', registerRouter)
//server.use('/api/users', userRouter)
server.use('/api/students', restricted, studentsRouter)
server.use('/api/projects', restricted, projectsRouter)
server.use('/api/professors-students', restricted, professorStudentRouter)

module.exports = server
