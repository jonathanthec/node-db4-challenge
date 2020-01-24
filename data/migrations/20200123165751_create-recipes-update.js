exports.up = function(knex) {
    return knex.schema
        .createTable("recipe", tbl => {
            tbl.increments();
            tbl.string("recipe_title", 128)
                .notNullable()
                .index();
        })
        .createTable("instruction", tbl => {
            tbl.primary(["recipe_id", "step"]);
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipe");
            tbl.integer("step")
                .notNullable();
            tbl.string("task", 255)
                .notNullable();
        })
        .createTable("ingredient", tbl => {
            tbl.increments();
            tbl.string("ingredient_name")
                .unique()
                .notNullable();
        })
        .createTable("recipe_ingredient", tbl => {
            tbl.primary(["recipe_id", "ingredient_id"]);
            tbl.integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipe");
            tbl.integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredient");
            tbl.float("quantity")
                .notNullable();
            tbl.string("unit", 255)
                .notNullable();
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("recipe")
        .dropTableIfExists("instruction")
        .dropTableIfExists("ingredient")
        .dropTableIfExists("recipe_ingredient");
};
