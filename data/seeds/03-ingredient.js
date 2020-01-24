exports.seed = function(knex) {
  return knex('ingredient').truncate()
    .then(function () {
      return knex('ingredient').insert([
        {id: 1, ingredient_name: 'Beef'},
        {id: 2, ingredient_name: 'Potatoes'},
        {id: 3, ingredient_name: 'Chicken Wings'}
      ]);
    });
};