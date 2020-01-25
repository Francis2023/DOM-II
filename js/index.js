// Your code goes here
const title = document.querySelector('.logo-heading');
const img = document.querySelectorAll('img');
const nav = document.querySelector('nav');
const navLink = document.querySelector('nav-link');
const heads = document.querySelectorAll('h2');
const button = document.querySelectorAll('btn');
const bottomHeads = document.querySelectorAll('h4');

title.addEventListener('click', (event) => {
    event.target.style.color = "blue";
})

img[0].addEventListener('mouseover', (event) => {
    event.target.style.opacity = "0.5";

   
})
img[0].addEventListener('mouseout', (event) => {
    event.target.style.opacity = "1";
})
nav.addEventListener('dblclick', (event) => {
    event.target.style.transform = 'scale(1.3)';

    setTimeout(() => {
        event.target.style.transform = "";
        }, 200);
}) 

nav.addEventListener('click', (event) => {
    event.preventDefault();
})

bottomHeads.addEventListener('load', (event) => {
  log.textContent = ''; 
})
button.addEventListener('keydown', (event) =>{
    event.target.log.textContent += '${e.code}'
})

//heads.addEventListener('focus', () => {

//})

img[1].addEventListener('blur', () => {
    document.body.classList.add('paused');
    log.textContent = 'No focus!';

})