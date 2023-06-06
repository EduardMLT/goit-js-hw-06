// 1й - уточнений
// const navEl_all = document.querySelectorAll('li > ul');
// // console.log('1= navEl_all', navEl_all);
// console.log('Number of categories: ', navEl_all.length);
// const numbersEl = [];
// navEl_all.forEach ( elm => {
//     const numberLi_in_Ul = elm.querySelectorAll('li').length;
//     numbersEl.push(elm.querySelectorAll('li').length);
//     });
// const title_h2 = document.querySelectorAll('h2');
// title_h2.forEach((number, index) => {
//     console.log('Category : ', title_h2[index].textContent);
//     console.log('Elements : ', numbersEl[index]);
// });

// 2й варіант
const categoriesEl = document.querySelector("#categories");
const numbersCategories = categoriesEl.children;
console.log("Number of categories: ", numbersCategories.length);
const liItemEl = categoriesEl.querySelectorAll(".item");
liItemEl.forEach((element) => {
  console.log("Category: ", element.firstElementChild.textContent);
  console.log("Elements: ", element.lastElementChild.children.length);
});


