const bcrypt = require('bcryptjs');
const faker = require('faker');

const testPass = bcrypt.hashSync('pass', 10);

const userList = [{ username: "test", password: testPass },];

for (let i = 1; i < 9; i++) {
  const newUser = {}
  newUser.username = `${faker.name.studentName()}}@school.edu`;
  newUser.password = bcrypt.hashSync("pass", 10);
  userList.push(newUser);
}

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').insert(userList);
};
