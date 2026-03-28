let contentBox = document.querySelector("#content");
    // if(contentBox){
    //     contentBox.style.width= "60vw";
    //     contentBox.style.height= '60vh';
    //     contentBox.style.border="2px solid black";
    // }
let restaurantName = document.createElement('h1');
    if(restaurantName){
        restaurantName.classList.add("restaurantName");
        restaurantName.textContent="Biscuit Bonanza";
        contentBox.appendChild(restaurantName);
    }

let restaurantAbout= document.createElement('div');
    if(restaurantAbout){
        restaurantAbout.classList.add("restaurantAbout");
        restaurantAbout.textContent=`Ever had that one place that just does it for ya? That one place that's cheap, quick, efficient, 
                and fills that space in your stomach in the morning? Well that's our goal here at Biscuit Bonanza! Every day 
                we make our biscuits from scratch from fresh ingrediants and quick service. Enjoy our "deal of the week" where 
                we have deals on all of your favorite breakfast fixings! Come by Biscuit Bonanza today and see what all the fuss is about, you 
                may just find your new favorite place in the morning! Quick, simple, filling. That's how we do it here at Biscuit Bonanza!`
        content.appendChild(restaurantAbout);
    }




export{contentBox, restaurantName, restaurantAbout};