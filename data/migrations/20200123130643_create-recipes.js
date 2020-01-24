exports.up = function(knex) {
    return knex.schema
        .createTable("recipe", tbl => {
            tbl.increments();
            tbl.string("recipe_title", 128)
                .notNullable()
                .index();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe");
};
