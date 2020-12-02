// Your code goes here

//-mouseover-
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'red'
    // console.log("hello");
});

//-keydown-
const keyDown = document.querySelector('body');
keyDown.addEventListener('keydown', event => {
    if (event.key === 'Control'){
   alert("keydown works")}
});

//-wheel-
window.addEventListener('scroll', event => {
    console.log(`I have scrolled ${event.deltaMode} number of times.`);
});

//-load-
window.addEventListener('load',(event) => {
    alert('Page is fully loaded');
});

//-focus-


//-resize-
window.addEventListener('resize', (event) =>{
    console.log('Change in size');
});

//-scroll-


//-select-
const selectP = document.querySelector('p')
selectP.addEventListener('select', (event) => {
    console.log("You selected some text.");
});

//-dbclick-


//-drag / drop-