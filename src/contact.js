let contactDesign = () =>{

    let contentBox = document.querySelector('#content');
    contentBox.textContent='';
    contentBox.style.height='auto';

    let intro = document.createElement('div');
        if(intro){
            intro.textContent='Contact Us';
            intro.classList.add('title');
            intro.style.height='10%';
            contentBox.appendChild(intro);

        }
    
    let innerContent = document.createElement('div');
        innerContent.style.paddingBottom='10vh';

        if(innerContent){
            innerContent.classList.add('innerContent');
            contentBox.appendChild(innerContent)
        }

        let contact1 = document.createElement("div");
            if(contact1){
                contact1.classList.add('contactBox');
                innerContent.appendChild(contact1);


                let name=document.createElement('h2');
                    if(name){
                        name.textContent='John Doe';
                        name.classList.add('name');
                        contact1.appendChild(name);
                    }

                let rank = document.createElement('h3');
                    if(rank){
                        rank.textContent='General Manager';
                        rank.classList.add('rank');
                        contact1.appendChild(rank);
                    }

                let phoneNumber = document.createElement('h3');
                    if(phoneNumber){
                        phoneNumber.textContent='Phone Number : 333-333-3333';
                        phoneNumber.classList.add('rank');
                        contact1.appendChild(phoneNumber);
                    }

                let email = document.createElement('h3');
                    if(email){
                        email.textContent='totallyARealEmail.@emailcompany.com';
                        email.classList.add('rank');
                        contact1.appendChild(email);
                    }
            }

            




}

export{contactDesign};