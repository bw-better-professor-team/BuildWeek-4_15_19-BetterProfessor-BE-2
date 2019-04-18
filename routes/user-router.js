// const router = require('express').Router()
// const express = require('express')
// const db = require('../data/dbConfig.js')
//
// router.get('/', (req, res) => {
//   db('users').then(response => {
//     res.status(200).json(response)
//   }).catch(err => {
//     res.status(500).json(err)
//   })
// })
//
// router.get('/:id', (req, res) => {
//   const id = req.params.id
//
//   db('users').where({id})
//     .first()
//     .then(user => {
//       res.status(200).json(user)
//     }).catch(err => {
//       res.status(500).json(err)
//     })
// })
//
// router.post('/', (req, res) => {
//   const users = req.body
//   if(users.username && users.password) {
//     db.insert(users).then(user => {
//       res.status(201).json(users)
//     }).catch(err => {
//       res.status(500).json({ message: 'Error saving username and password to datatbase' })
//     })
//   } else {
//     res.status(400).json({ message: 'Provide the correct username and password' })
//   }
// })
//
// router.put('/:id', (req, res) => {
//   db('users').where({id: req.params.id})
//     .update(req.body)
//     .then(user => {
//       if(user) {
//         res.status(200).json(user)
//       } else {
//         res.status(404).json({ message: 'User not found' })
//       }
//     }).catch(err => {
//       res.status(500).json(err)
//     })
// })
//
// router.delete('/:id', (req, res) => {
//   db('users').where({id: req.params.id})
//     .del()
//     .then(user => {
//       if(user) {
//         res.status(204).json(user)
//       } else {
//         res.status(404).json({ message: 'User cannot be deleted' })
//       }
//     }).catch(err => {
//       res.status(500).json(err)
//     })
// })
//
// module.exports = router
