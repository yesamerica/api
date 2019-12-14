
exports.up = function(knex) {
  return knex.schema.createTable('roles',col=>{
      col.increments()
      col.text('role')
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('roles')
};
