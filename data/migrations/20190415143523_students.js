
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', tbl => {
    tbl.increments()

    tbl.string('student_name', 128).notNullable()
    tbl.string('email', 128).notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students')
};
