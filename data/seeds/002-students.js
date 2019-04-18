
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').insert([
    {student_name: 'Renee Taylor', email: 'renee@yahoo.com'},
    {student_name: 'Robert Taylor', email: 'robert@yahoo.com'},
    {student_name: 'Usagi Tsukino', email: 'usagi@yahoo.com'},
    {student_name: 'Mary Jane', email: 'mary@gmail.com'},
    {student_name: 'James Carter', email: 'james@yahoo.com'}
  ])

};
