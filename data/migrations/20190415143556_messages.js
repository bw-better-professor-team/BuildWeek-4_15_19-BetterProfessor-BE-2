
exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', tbl => {
    tbl.increments()

    tbl.text('message').notNullable().unique()
    
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('messages')
};
