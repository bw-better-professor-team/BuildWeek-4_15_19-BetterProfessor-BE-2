const router = require('express').Router()
const express = require('express')
const db = require('../data/dbConfig.js')

router.get('/', (req, res) => {
  db('students').then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id

  db('students').where({id})
    .first()
    .then(student => {
      res.status(200).json(student)
    }).catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  const students = req.body

  if(students.student_name) {
    db.insert(students).then(student => {
      res.status(201).json(students)
    }).catch(err => {
      res.status(500).json({ message: 'Error saving students name' })
    })
  } else {
    res.status(404).json({ message: 'Provide the correct students name' })
  }
})

router.put('/:id', (req, res) => {
  db('students').where({id: req.params.id})
    .update(req.body)
    .then(student => {
      if(student) {
        res.status(200).json(student)
      } else {
        res.status(404).json({ message: 'Student not found' })
      }
    }).catch(err => {
      res.status(500).json(err)
    })
})

router.delete('/:id', (req, res) => {
  db('students').where({id: req.params.id})
    .del()
    .then(student => {
      if(student) {
        res.status(204).json(student)
      } else {
        res.status(404).json({ message: 'Student cannot be deleted' })
      }
    }).catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
