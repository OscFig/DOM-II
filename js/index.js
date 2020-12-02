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
   console.log("keydown works")}
});

//-wheel-


//-load-


//-focus-


//-resize-


//-scroll-


//-select-


//-dbclick-


//-drag / drop-