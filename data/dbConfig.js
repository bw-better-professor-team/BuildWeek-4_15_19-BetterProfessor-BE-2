const dbEnv = process.env.NODE_ENV || 'development';
const knex = require('knex')
const knexConfig = require('../knexfile.js')[dbEnv]

module.exports = knex(knexConfig);
