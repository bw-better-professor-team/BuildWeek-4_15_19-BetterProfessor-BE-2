require('dotenv').config()
const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')
const db = require('../data/dbConfig.js')

const registerRouter = require('../routes/register-router.js')
const userRouter = require('../routes/user-router.js')
const studentsRouter = require('../routes/students-router.js')
const projectsRouter = require('../routes/projects-router.js')

server.use(helmet())
server.use(express.json())
server.use(cors())


server.use('/api/register', registerRouter)
server.use('/api/users', userRouter)
server.use('/api/students', studentsRouter)
server.use('/api/projects', projectsRouter)

module.exports = server
