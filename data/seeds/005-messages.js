
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('messages').insert([
    {message: 'Working on this wonderful app'},
    {message: 'I love working on this particular project'},
    {message: 'Building this is so much fun!'},
    {message: 'Learning so much!'},
    {message: 'Love working in teams and Learning!'}
  ])

};
