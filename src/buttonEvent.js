let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let contactButton = document.querySelector("#contact");


homeButton.addEventListener('click', ()=>{
        homeButton.style.color='blue';
})

menuButton.addEventListener('click', ()=>{
    menuButton.style.backgroundColor='yellow';
})

contactButton.addEventListener('click', ()=>{
    alert('Yo Fat Mama')
})

export{homeButton, menuButton, contactButton};