require('dotenv').config()

const express = require('express')

const server = express()

server.use(express.json())
server.get('/', (req, res) => {
  res.send('Build Week WEB17!!')
})

const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})
