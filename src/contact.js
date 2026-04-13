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
                        name.textContent='Jonathon McCarther';
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

            
        let contact2 = document.createElement("div");
            if(contact2){
                contact2.classList.add('contactBox');
                innerContent.appendChild(contact2);


                let name=document.createElement('h2');
                    if(name){
                        name.textContent='Jane Doe';
                        name.classList.add('name');
                        contact2.appendChild(name);
                    }

                let rank = document.createElement('h3');
                    if(rank){
                        rank.textContent='Assistant Manager';
                        rank.classList.add('rank');
                        contact2.appendChild(rank);
                    }

                let phoneNumber = document.createElement('h3');
                    if(phoneNumber){
                        phoneNumber.textContent='Phone Number : 333-333-3334';
                        phoneNumber.classList.add('rank');
                        contact2.appendChild(phoneNumber);
                    }

                let email = document.createElement('h3');
                    if(email){
                        email.textContent='thisIsACoolEmail.@emailcompany.com';
                        email.classList.add('rank');
                        contact2.appendChild(email);
                    }
            }


        let contact3 = document.createElement("div");
            if(contact1){
                contact3.classList.add('contactBox');
                innerContent.appendChild(contact3);


                let name=document.createElement('h2');
                    if(name){
                        name.textContent='William Jensen';
                        name.classList.add('name');
                        contact3.appendChild(name);
                    }

                let rank = document.createElement('h3');
                    if(rank){
                        rank.textContent='Shift Leader';
                        rank.classList.add('rank');
                        contact3.appendChild(rank);
                    }

                let phoneNumber = document.createElement('h3');
                    if(phoneNumber){
                        phoneNumber.textContent='Phone Number : 333-333-3335';
                        phoneNumber.classList.add('rank');
                        contact3.appendChild(phoneNumber);
                    }

                let email = document.createElement('h3');
                    if(email){
                        email.textContent='thisIsMyEmail.@emailcompany.com';
                        email.classList.add('rank');
                        contact3.appendChild(email);
                    }
            }


            let contact = document.createElement('p');
                if(contact){
                    contact.textContent=`Contact us at Biscuit Bonanza for any questions, concerns, or appreciation. We'd 
                                            love to hear from you! If you have any events planned we also cater and have 
                                            special packages for large groups. Call us today for more information!`;
                    contact.classList.add('contactEnd');
                    innerContent.appendChild(contact);
                }

}

export{contactDesign};