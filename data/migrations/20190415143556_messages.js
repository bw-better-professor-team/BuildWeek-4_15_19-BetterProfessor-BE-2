
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', tbl => {
    tbl.increments()

    tbl.date('date').notNullable()
    tbl.time('time').notNullable()
    tbl.string('text', 128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
