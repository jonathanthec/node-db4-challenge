exports.seed = function(knex) {
  return knex('instruction').truncate()
    .then(function () {
      return knex('instruction').insert([
        {recipe_id: 1, step: 1, task: "Cut beef, mix with potatoes"},
        {recipe_id: 1, step: 2, task: "Mix with spices"},
        {recipe_id: 1, step: 3, task: "Cook for one hour"},
        {recipe_id: 2, step: 1, task: "Marinate chicken wings"},
        {recipe_id: 2, step: 2, task: "Cut potatoes and place at bottom of baking sheet"},
        {recipe_id: 2, step: 3, task: "Put wings on top of potatoes, add spices"},
        {recipe_id: 2, step: 4, task: "Bake for 45 minutes"}
      ]);
    });
};