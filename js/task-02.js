const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const titleEl = [];
for ( let k = 0; k < ingredients.length; k += 1 ) {
  titleEl[k] = document.createElement('li');
  titleEl[k].classList.add('item');
  titleEl[k].textContent = ingredients[k];
  console.log(titleEl[k]);
};      

titleEl.forEach ( item => {
  document.body.appendChild(item);
});