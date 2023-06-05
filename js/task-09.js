function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const bodyGround = document.body;  
const spanText = document.querySelector(".color");  
const btnStart = document.querySelector(".change-color");

btnStart.addEventListener('click', function  () {
  const bodyColor = getRandomHexColor();
  spanText.textContent = bodyColor;
  bodyGround.style.backgroundColor = bodyColor;
  console.log(spanText.textContent);  
} );