let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");

import {homePage} from './pageDesign.js';
import {menuDesign} from './menuDesign.js';


// Want it so that when clicked it performs a function

homeButton.addEventListener('click', ()=>{
    console.log(homePage());
})

menuButton.addEventListener('click', ()=>{
    console.log(menuDesign());
})

contactButton.addEventListener('click', ()=>{
    alert('This is a button')
})

export{homeButton, menuButton, contactButton};