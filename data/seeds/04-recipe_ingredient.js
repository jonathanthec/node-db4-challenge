exports.seed = function(knex) {
  return knex('recipe_ingredient').truncate()
    .then(function () {
      return knex('recipe_ingredient').insert([
        {recipe_id: 1, ingredient_id: 1, quantity: 1.5, unit: "lbs"},
        {recipe_id: 1, ingredient_id: 2, quantity: 1, unit: "lbs"},
        {recipe_id: 2, ingredient_id: 2, quantity: 1, unit: "lbs"},
        {recipe_id: 2, ingredient_id: 3, quantity: 1.5, unit: "lbs"}
      ]);
    });
};