
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('student-project').insert([
    {student_id: 1, project_id: 1, professor_id: 1, student_message: 1, professor_message: 1},
    {student_id: 2, project_id: 2, professor_id: 2, student_message: 2, professor_message: 2},
    {student_id: 3, project_id: 3, professor_id: 3, student_message: 3, professor_message: 3},
    {student_id: 4, project_id: 4, professor_id: 4, student_message: 4, professor_message: 4},
    {student_id: 5, project_id: 5, professor_id: 5, student_message: 5, professor_message: 5}
  ])


};
