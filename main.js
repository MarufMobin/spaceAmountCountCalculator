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
