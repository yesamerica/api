
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'testuser1@localhost.com',password:'roman'},
        {email: 'testuser2@localhost.com',password:'roman'},
        {email: 'testuser3@localhost.com',password:'roman'}
      ]);
    });
};
