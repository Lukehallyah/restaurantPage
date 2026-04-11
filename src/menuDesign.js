
let menuDesign = () => {

    let contentBox = document.querySelector('#content');
    contentBox.textContent='';
    contentBox.style.height='auto';
    



    let title = document.createElement('h1');
        if(title){
            title.classList.add('title');
            title.textContent='Menu';
            contentBox.appendChild(title);
        }
    let innerContent = document.createElement('div');
        innerContent.style.paddingBottom='10vh';

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
                price.textContent='$2.50';

            menu2.appendChild(h2);
            menu2.appendChild(description);
            menu2.appendChild(price);
            innerContent.appendChild(menu2);
        }

    let menu3 = document.createElement('div');
        if(menu3){
            menu3.classList.add('menuBox');
              
            let h2 = document.createElement('h2');
            h2.textContent='Ham and Cheese Biscuit';
            h2.style.textAlign='center';
            h2.style.fontSize='1.75rem';

            let description = document.createElement('p');
                description.style.textAlign='center';
                description.textContent=`Honey smoked ham biscuit with fresh Wisconsin cheddar all on fresh scratch 
                                            made biscuits? Sounds like a good time!`;

            let price = document.createElement('h2');
                price.textContent='$1.99';

            menu3.appendChild(h2);
            menu3.appendChild(description);
            menu3.appendChild(price);
            innerContent.appendChild(menu3);
        }

    let menu4 = document.createElement('div');
        if(menu4){
            menu4.classList.add('menuBox');
              
            let h2 = document.createElement('h2');
            h2.textContent='Butter Biscuit';
            h2.style.textAlign='center';
            h2.style.fontSize='1.75rem';

            let description = document.createElement('p');
                description.style.textAlign='center';
                description.textContent=`Fresh scratch made biscuits by our specially trained biscuitmakers topped with
                                            mouthwatering garlic butter, the perfect start to every morning`;

            let price = document.createElement('h2');
                price.textContent='$0.99';

            menu4.appendChild(h2);
            menu4.appendChild(description);
            menu4.appendChild(price);
            innerContent.appendChild(menu4);
        }

    let menu5 = document.createElement('div');
        if(menu5){
            menu5.classList.add('menuBox');
              
            let h2 = document.createElement('h2');
            h2.textContent='Breakfast Platter';
            h2.style.textAlign='center';
            h2.style.fontSize='1.75rem';

            let description = document.createElement('p');
                description.style.textAlign='center';
                description.textContent=`A platter including bacon and eggs, sausage patty with a biscuit and gravy, along 
                                            with hashbrowns makes for the perfect morning breakfast!`;

            let price = document.createElement('h2');
                price.textContent='$5.99';

            menu5.appendChild(h2);
            menu5.appendChild(description);
            menu5.appendChild(price);
            innerContent.appendChild(menu5);
        }



    
}

export{menuDesign};