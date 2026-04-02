
let menuDesign = () => {

    let contentBox = document.querySelector('#content');
    contentBox.textContent='';


    let title = document.createElement('h1');
        if(title){
            title.classList.add('title');
            title.textContent='Menu';
            contentBox.appendChild(title);
        }










    
}

export{menuDesign};