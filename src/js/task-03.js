const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const titleEl = [];
for ( let k = 0; k < images.length; k += 1 ) {
   titleEl[k] = document.querySelector('.gallery');
   titleEl[k].insertAdjacentHTML('afterBegin','<li></li>');

   let liEl = document.querySelector('li');
   liEl.classList.add('block_task_03'); // добавив css
   liEl.style.cssText = `
       display: flex;
       justify-content: center;
       align-items: center;
       margin-left: auto;
       margin-right: auto;
       margin-bottom: 20px;
  `;
  
   const imageEl = document.createElement('img');  
   imageEl.src = images[k].url;
   imageEl.alt = images[k].alt;
   imageEl.width = 320;
   imageEl.height = 200;
  //  console.log('titleEl', titleEl[k]);
   // console.log('imageEl', imageEl);
   let img_in_li = document.querySelector('li'); // місце - куди вставляємо
   img_in_li.insertAdjacentElement('afterBegin',imageEl); // що вставляємо
};
console.log('titleEl', titleEl[0]); // beforeEnd afterBegin