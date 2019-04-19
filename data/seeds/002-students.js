const faker = require('faker')

const studentList = []
for(let i = 0; i < 100; i++) {
  const newStudent = {}
  newStudent.student_name = faker.name.lastName()
  newStudent.email = faker.internet.email()
  studentList.push(newStudent)
}
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').insert(studentList)

};
