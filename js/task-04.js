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
const valueEl = document.querySelector('#value');

//  додати слухача події
crementButton[0].addEventListener('click', function () {    
    counter.decrement();
    valueEl.textContent = counter.value;
    console.log('Клик на -1', valueEl.textContent);
} );

crementButton[1].addEventListener('click', function () {    
    counter.increment();
    valueEl.textContent = counter.value;
    console.log('Клик на +1', valueEl.textContent);
} );

