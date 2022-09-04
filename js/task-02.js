const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
const ingredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const itemIng = document.createElement('li');
    itemIng.textContent = ingredient;
    itemIng.classList.add('item');
    return itemIng;
  });
};
const itemsIng = ingredientsList(ingredients);
ingredientsEl.append(...itemsIng);
