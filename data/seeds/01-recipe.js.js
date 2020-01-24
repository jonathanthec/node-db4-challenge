exports.seed = function(knex) {
  return knex('recipe').truncate()
    .then(function () {
      return knex('recipe').insert([
        {id: 1, recipe_title: 'Beef Stew'},
        {id: 2, recipe_title: 'Oven Roasted Wings with Potatoes'}
      ]);
    });
};