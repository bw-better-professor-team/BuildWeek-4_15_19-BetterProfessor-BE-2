const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secrets = require('../api/secrets.js');
const db = require('../data/dbConfig.js');

router.get('/:id', async (req, res) => {

  const id = req.params.id;

  const info = await db('student-project')
    .innerJoin('users', 'users.id', '=', 'student-project.professor_id')
    .where('student-project.professor_id', '=', `${id}`)
    .select('student_id')
    .distinct('student_id');

  for (let i = 0; i < info.length; i++) {
    const { student_name, email } = await db('students').where({ 'id': `${info[i].student_id}` }).select('student_name', 'email').first();
    info[i].student_name = student_name;
    info[i].email = email;
    info[i].project = await db('projects').join('student-project', 'projects.id', '=', 'student-project.project_id')
      .where({ 'student-project.student_id': `${info[i].student_id}` })
      .select('project_id', 'project_name', 'project_deadline', 'feedback_deadline', 'recommendation_deadline')

    for (let j = 0; j < info[i].project.length; j++) {
      try {
        const { message } = await db('student-project')
          .join('messages', 'student-project.student_message', '=', 'messages.id')
          .where({ 'student-project.student_id': `${info[i].student_id}` })
          .where({ 'student-project.project_id': `${info[i].project[j].project_id}` })
          .select('message').first();

        info[i].project[j].studentMessage = message;
      } catch (error) {
        info[i].project[j].studentMessage = '';
      }

      try {
        const profmessage = await db('student-project')
          .join('messages', 'student-project.professor_message', '=', 'messages.id')
          .where({ 'student-project.professor_id': `${id}` })
          .where({ 'student-project.project_id': `${info[i].project[j].project_id}` })
          .where({ 'student-project.student_id': `${info[i].student_id}` })
          .select('message').first();

        console.log(profmessage);
        if (profmessage.message) {
          info[i].project[j].professorMessage = profmessage.message;
        } else {
        }
      } catch (error) {
        info[i].project[j].professorMessage = '';
        // console.error(error)
      }
    }

  }


  res.status(200).json(info);
});

module.exports = router;
