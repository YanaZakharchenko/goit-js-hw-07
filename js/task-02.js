const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listIngredients = ingredients.map(item => {
  const li = document.createElement('li');
  li.textContent = item;
  return li;
});
document.querySelector('#ingredients').prepend(...listIngredients);
