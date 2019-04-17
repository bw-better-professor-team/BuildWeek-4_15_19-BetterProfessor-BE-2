const router = require('express').Router()
const express = require('express')
const db = require('../data/dbConfig.js')

router.get('/', (req, res) => {
  db('users').then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/:id', (req, res) => {
  const {id} = req.params

  db.getById(id).then(user => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: 'User with the ID does not exist'})
    }
  }).catch(err => {
    res.status(500).json({ message: 'User could not be retrieved' })
  })
})

router.post('/', (req, res) => {
  const users = req.body
  if(users.username && users.password) {
    db.insert(users).then(user => {
      res.status(201).json(users)
    }).catch(err => {
      res.status(500).json({ message: 'Error saving username and password to datatbase' })
    })
  } else {
    res.status(400).json({ message: 'Provide the correct username and password' })
  }
})

router.put('/:id', (req, res) => {
  const {id} = req.params
  const users = req.body

  if(users.username && users.password){
    db.update(id, users).then(user => {
      if(user) {
        res.status(200).json(user)
      } else {
        res.status(404).json({ message: 'User with the ID does not exist' })
      }
    }).catch(err => {
      res.status(500).json({ message: 'User information could not be retrieved' })
    })
  } else {
    res.status(400).json({ message: 'Provide correct username and password' })
  }
})

router.delete('/:id', (req, res) => {
  const {id} = req.params

  db.remove(id).then(user => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: 'User with the ID does not exist' })
    }
  }).catch(err => {
    res.status(500).json({ message: 'Username could not be removed' })
  })
})

module.exports = router
