
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project-list', tbl => {
    tbl.increments()

    tbl.string('project', 128).notNullable()
    tbl.datetime('project_deadline').notNullable()
    tbl.datetime('feedback_deadline').notNullable()
    tbl.datetime('recommendation_deadline').notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('project-list')
};
