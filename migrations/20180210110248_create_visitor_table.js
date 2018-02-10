
exports.up = function(knex, Promise) {
    return knex.schema.createTable('visitor', function (t) {
            t.increments('id').primary()
            t.string('fullname').notNullable()
            t.string('mobilenum').notNullable()
            t.string('nricnum').notNullable()
            t.timestamps(false, true)
})

};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('visitor')
};
