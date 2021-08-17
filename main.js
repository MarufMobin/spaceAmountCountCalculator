const marseCost = 5000;
const moonCost = 3000;

function handleQuentity(planet, oparator){
    // let quantityInput = document.getElementById(`${planet}-quantity`).value;
    const quantityInput = document.getElementById( planet + "-quantity").value;
    let quantity = parseInt(quantityInput);

    if( oparator === "plus"){
        quantity = quantity + 1;
    }else{
        if( quantity < 1 ){
            return;
        }  
        //else{
        //     quantity = quantity - 1; 
        // }
        quantity = quantity - 1; 
    }

    document.getElementById( planet + "-quantity").value = quantity;
 
    calculateJourney(planet);

    totalAmount();
    
}

function calculateJourney(planet){

    const quantityInput = document.getElementById( planet + "-quantity").value;

    const quantity = parseInt(quantityInput);
    
    if( planet === "mars" ){
       const marsTotal = marseCost * quantity;
       updateUI(planet,marsTotal);
    }
    else{
        const moonTotal = moonCost * quantity;
        updateUI(planet,moonTotal);
    }

}


function updateUI( planet, total ){
    const planetTotal = document.getElementById(`${planet}-total`);
    planetTotal.innerText = total;
}

function totalAmount(){
    const marsQuantityInput = document.getElementById( 'mars-total').innerText;
    let marsQuantity = parseInt(marsQuantityInput);

    const moonQuantityInput = document.getElementById( 'moon-total').innerText;
    let moonQuantity = parseInt(moonQuantityInput);

    const totalQuantityInput = document.getElementById('total');   

    totalQuantityInput.innerText = marsQuantity + moonQuantity;
}