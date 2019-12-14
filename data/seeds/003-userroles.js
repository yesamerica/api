
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        { user_id:1,role_id:1},
        { user_id:2,role_id:2},
        { user_id:3,role_id:4}
      ]);
    });
};
