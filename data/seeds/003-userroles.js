
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_roles').del()
    .then(function () {
      // Inserts seed entries
      return knex('user_roles').insert([
        { user_id:1,role_id:1},
        { user_id:2,role_id:2},
        { user_id:3,role_id:4}
      ]);
    });
};
