//passenger counter app

//declare variables
let count, countEl, availableCpt, saveEl, totalCpt;

countEl = document.getElementById("count-el"); //pass in arguments

saveEl = document.getElementById("history");

availableCpt = document.getElementById("available-cpt");
totalCpt = 16;
//initialize count as 0
count = 0;


//listen for clicks on the increment button
function increment() {
    if (count >= 0 && count < 16) {

        count++; //increment the count variable when the button is clicked
        document.getElementById("maximum-cpt-popup").style.display = "none";
    } else if (count == 16 ){
        document.getElementById("maximum-cpt-popup").style.display = "block";
    } 
    
    countEl.innerText = count; //change the count-el in HTML

    availableCpt.innerText = totalCpt - count;    
}

//listen for clicks on the decrement button
function decrement() {
    if (count <= 16 && count > 0) {
        count--;
        document.getElementById("maximum-cpt-popup").style.display = "none";
    } else if (count == 16 ){
        document.getElementById("maximum-cpt-popup").style.display = "block";
    } 

    countEl.innerText = count;

    availableCpt.innerText = totalCpt - count;      
}



function save() {
    
    let history = count + " - ";

    saveEl.textContent += history;

    countEl.textContent = 0;

    count = 0;

    availableCpt.textContent = totalCpt;


}

function closePopup() {
    document.getElementById("maximum-cpt-popup").style.display = "none";
}










