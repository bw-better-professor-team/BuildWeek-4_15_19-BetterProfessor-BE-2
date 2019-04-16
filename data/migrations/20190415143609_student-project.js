
exports.up = function(knex, Promise) {
  return knex.schema.createTable('student-project', tbl => {
    tbl.increments()

    tbl.integer('student_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('students')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project-list')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.integer('professor_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')

    tbl.integer('student_message')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('messages')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')

    tbl.integer('professor_message')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('messages')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('student-project')
};
