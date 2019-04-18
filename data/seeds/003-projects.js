
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('project-list').insert([
    {project: 'React Book Store',
      project_deadline: '2019-07-07 23:59:59',
      feedback_deadline: '2019-07-07 23:59:59',
      recommendation_deadline: '2019-07-07 23:59:59'},
    {project: 'To-do list',
      project_deadline: '2019-05-05 23:59:59',
      feedback_deadline: '2019-05-05 23:59:59',
      recommendation_deadline: '2019-05-05 23:59:59'},
    {project: 'NBA React app',
      project_deadline: '2019-03-03 23:59:59',
      feedback_deadline: '2019-03-03 23:59:59',
      recommendation_deadline: '2019-03-03 23:59:59'},
    {project: 'Node Project',
      project_deadline: '2019-09-09 23:59:59',
      feedback_deadline: '2019-09-09 23:59:59',
      recommendation_deadline: '2019-09-09 23:59:59'},
    {project: 'Front End Project',
      project_deadline: '2019-08-08 23:59:59',
      feedback_deadline: '2019-08-08 23:59:59',
      recommendation_deadline: '2019-08-08 23:59:59'}
  ])

};
