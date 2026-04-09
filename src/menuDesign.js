
let menuDesign = () => {

    let contentBox = document.querySelector('#content');
    contentBox.textContent='';


    let title = document.createElement('h1');
        if(title){
            title.classList.add('title');
            title.textContent='Menu';
            contentBox.appendChild(title);
        }
    let innerContent = document.createElement('div');
        if(innerContent){
            innerContent.classList.add('innerContent');
            contentBox.appendChild(innerContent)
        }

        // innerContent will be the box that everything goes in


    let menu1 = document.createElement('div');
        if(menu1){
            menu1.classList.add('menuBox');
              
            let h2 = document.createElement('h2');
            h2.textContent='Sausage and Egg Biscuit';
            h2.style.fontSize='1.75rem';

            let description = document.createElement('p');
                description.style.textAlign='center';
                description.textContent=`Homefried Sausage with fresh made to perfection egg, 
                                        the perfect combination. With fresh made biscuits every morning 
                                        you can't go wrong!`;

            let price = document.createElement('h2');
                price.textContent='$3.50';

            menu1.appendChild(h2);
            menu1.appendChild(description);
            menu1.appendChild(price);
            innerContent.appendChild(menu1);
        }

    let menu2 = document.createElement('div');
        if(menu2){
            menu2.classList.add('menuBox');
              
            let h2 = document.createElement('h2');
            h2.textContent='Bacon Egg and Cheese Biscuit';
            h2.style.textAlign='center';
            h2.style.fontSize='1.75rem';

            let description = document.createElement('p');
                description.style.textAlign='center';
                description.textContent=`Crispy fried bacon on a fresh buttermilk biscuit topped with cheese and 
                                            fresh cooked eggs, ready and waiting for you in the morning`;

            let price = document.createElement('h2');
                price.textContent='$3.50';

            menu2.appendChild(h2);
            menu2.appendChild(description);
            menu2.appendChild(price);
            innerContent.appendChild(menu2);
        }






    
}

export{menuDesign};