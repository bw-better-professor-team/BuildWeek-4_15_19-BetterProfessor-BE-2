const router = require('express').Router()
const express = require('express')
const db = require('../data/dbConfig.js')

router.get('/', (req, res) => {
  db('project-list').then(response => {
    res.status(200).json(response)
  }).catch(err => {
    res.status(500).json(err)
  })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  db('project-list').where({id})
    .first()
    .then(project => {
      res.status(200).json(project)
    }).catch(err => {
      res.status(500).json(err)
    })
})

router.post('/', (req, res) => {
  const {
    projectName: project,
    projectDeadline: project_deadline,
    feedbackDeadline: feedback_deadline,
    recommendationDeadline: recommendation_deadline
  } = req.body

  if(!project || !project_deadline || !feedback_deadline || !recommendation_deadline) {
    res.status(400).json({ message: 'Fill in all of the fields' })
  } else {
    db('project-list').insert({ project, project_deadline, feedback_deadline, recommendation_deadline })
      .then(project => {
        res.status(201).json({ message: 'Project has been created' })
      }).catch(err => {
        res.status(500).json({ message: 'Internal server error. Try again.' })
      })
  }
})

router.put('/:id', (req, res) => {
  const {
    projectName: project,
    projectDeadline: project_deadline,
    feedbackDeadline: feedback_deadline,
    recommendationDeadline: recommendation_deadline
  } = req.body

  const id = req.params.id
  db('project-list').where({id})
    .update({
      project,
      project_deadline,
      feedback_deadline,
      recommendation_deadline
    })
    .then(project => {
      if(project) {
        res.status(201).json({ message: 'Project has been changed' })
      } else {
        res.status(404).json({ message: 'Nothing was found' })
      }
    }).catch(err => {
      res.status(500).json({ message: 'Internal server error. Try again.' })
    })
})

router.delete('/:id', (req, res) => {
  db('project-list').where({id: req.params.id})
    .del()
    .then(project => {
      if(project) {
        res.status(204).json(project)
      } else {
        res.status(404).json({ message: 'Project cannot be deleted' })
      }
    }).catch(err => {
      res.status(500).json(err)
    })
})

module.exports = router
