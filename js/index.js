// Your code goes here
const title = document.querySelector('logo-heading');
const img = document.querySelectorAll('img');
const nav = document.querySelector('nav');
const navLink = document.querySelector('nav-link');
const heads = document.querySelectorAll('h2');
const button = document.querySelectorAll('btn');
const bottomHeads = document.querySelectorAll('h4');

title.addEventListener('select', (event) => {
    event.target.color = "brown";
})

img[0].addEventListener('mouseover', () => {

})

navLink.addEventListener('drag', () => {
    
}) 

nav.addEventListener('click', (event) => {
    event.preventDefault();
})

bottomHeads.addEventListener('dblclick', (event) => {
    event.target.style.color = 'brown'; 
})

heads.addEventListener('focus', () => {

})

img[1].addEventListener('resize', () => {
    
})