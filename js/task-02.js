const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');
const itemsEl = ingredients.map((ingredient) => {
  const addIngredients = document.createElement("li");
  addIngredients.classList.add("item");
  addIngredients.textContent = ingredient;
  return addIngredients;
})

ingredientsEl.append(...itemsEl);