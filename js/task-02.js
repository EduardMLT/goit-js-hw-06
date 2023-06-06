const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleEl = [];
for ( let i = 0; i < ingredients.length; i += 1 ) {
  titleEl[i] = document.createElement('li');
  titleEl[i].classList.add('item');
  titleEl[i].textContent = ingredients[i];
  console.log(titleEl[i]);
};      

titleEl.forEach ( item => {
  document.body.appendChild(item);
});