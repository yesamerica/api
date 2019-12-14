
exports.up = function(knex) {
    return knex.schema.createTable('user_roles',col=>{
        col.increments()
        col.integer('role_id')
        .unsigned()
        .references('id')
        .inTable('roles')
        .notNullable()
        col.integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .notNullable()
        col.unique(['role_id','user_id'])
    })
};

exports.down = function(knex) {
  
};
