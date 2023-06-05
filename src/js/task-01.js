const navEl_all = document.querySelectorAll('.item ul');
// console.log('1= navEl_all', navEl_all);
console.log('Number of categories: ', navEl_all.length);

const numbersEl = [];
navEl_all.forEach ( kkk => {
 const numberLi_in_Ul = kkk.querySelectorAll('li').length;
 numbersEl.push(kkk.querySelectorAll('li').length);
});
    
const title_h2 = document.querySelectorAll('h2');
title_h2.forEach(function (number, index) {
 console.log('Category : ', title_h2[index].innerText);
 console.log('Elements : ', numbersEl[index]);
});


