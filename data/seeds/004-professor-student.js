let projectStudentList = []

function getRandomInt(max) {
  return 1 + Math.floor(Math.random() * Math.floor(max - 1))
}

for(let i = 1; i < 100; i++) {
  let projectStudent = {}
  projectStudent.student_id = getRandomInt(99)
  projectStudent.project_id = getRandomInt(7)
  projectStudent.professor_id = getRandomInt(9)
  projectStudent.student_message = getRandomInt(200)
  projectStudent.professor_message = getRandomInt(200)
  projectStudentList.push(projectStudent)
}
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student-project').insert(projectStudentList)


};
