require('dotenv').config()
const express = require('express')
const server = express()

const helmet = require('helmet')
const cors = require('cors')
const db = require('../data/dbConfig.js')

const registerRouter = require('../routes/register-router.js')
const loginRouter = require('../routes/login-router.js')

server.use(helmet())
server.use(express.json())
server.use(cors())

server.use('/api/register', registerRouter)


server.get('/users', (req, res) => {
  db('users').then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

module.exports = server
