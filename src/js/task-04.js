// робимо лічильник
const counter = {
    value : 0,
increment () {
    // console.log('increment ', this);
    this.value += 1;
},
decrement () {
    // console.log('decrement ', this);
    this.value -= 1;
},   
};


// знаходимо button по властивостям які ми вказали -
// як data-action= вони занеслись в dataset document

const crementButton = document.querySelectorAll('#counter button'); 
// console.log(crementButton);
// console.log(crementButton[0]);
// console.log(crementButton[1]);
// console.log(crementButton[0].dataset);
// console.log(crementButton[1].dataset);
// console.log(crementButton[0].dataset.action === 'decrement');
// console.log(crementButton[1].dataset.action === 'increment');

const valueEl = document.querySelector('#value');
// console.log(valueEl);

// console.log(crementButton[0].textContent = 'Hello');

// console.log('valueEl.textContent', valueEl.textContent);

//  додати слухача події
crementButton[0].addEventListener('click', function () {
    
    counter.decrement();
    // console.log(counter);
    valueEl.textContent = counter.value;
    console.log('Клик на -1', valueEl.textContent);
} );

crementButton[1].addEventListener('click', function () {
    
    counter.increment();
    // console.log(counter);
    valueEl.textContent = counter.value;
    console.log('Клик на +1', valueEl.textContent);
} );

