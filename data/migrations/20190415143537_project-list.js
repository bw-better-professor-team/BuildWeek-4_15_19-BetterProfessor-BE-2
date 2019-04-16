
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project-list', tbl => {
    tbl.increments()

    tbl.string('project', 128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project-list')
};
