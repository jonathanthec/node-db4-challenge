const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(recipe_id) {
  return db('recipe_ingredient')
    .select('ingredient.name', 'recipe_ingredient.quantity', 'recipe_ingredient.unit')
    .join('ingredient', 'recipe_ingredient.ingredient_id', 'ingredient.id')
    .where('recipe_ingredient.recipe_id',recipe_id);
}

function getInstructions(recipe_id) {
  return db('instruction')
    .select('step', 'task')
    .where('instruction.recipe_id', recipe_id)
    .orderBy('step', 'asc');
}