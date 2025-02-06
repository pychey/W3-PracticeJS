function hide(element){
    element.style.display = "none";
}

function show(element){
    element.style.display = "block";
}

let passwordView = document.getElementById("passwordView");
let lostView = document.getElementById("lostView");
let wonView = document.getElementById("wonView");
let checkButton = document.getElementById("checkButton");
let tryAgainButton = document.getElementById("tryAgainButton");

let instructionLabel = document.getElementById("instructionLabel");
let passwordInput = document.getElementById("passwordInput");

if(!localStorage.remainingChance){
    localStorage.setItem("remainingChance",3);
}
if(!localStorage.isWon){
    localStorage.setItem("isWon",false);
}

if(localStorage.getItem("isWon") == "true"){
    hide(passwordView);
    show(wonView);
}

if(localStorage.getItem("remainingChance") == 0){
    hide(passwordView);
    show(lostView);
    hide(tryAgainButton);
}

if(localStorage.getItem("remainingChance") < 3 && localStorage.getItem("isWon") != "true"){
    instructionLabel.textContent = "Enter your code (" + localStorage.getItem("remainingChance") + " chances left)";
}

checkButton.addEventListener("click", function(){
    const passwordEntered = passwordInput.value;
    if(passwordEntered == "Pychey"){
        hide(passwordView);
        show(wonView);
        localStorage.setItem("isWon",true);
    } else {
        hide(passwordView);
        show(lostView);
        localStorage.setItem("remainingChance",localStorage.getItem("remainingChance") - 1);
        if(localStorage.getItem("remainingChance") == 0){
            hide(tryAgainButton);
        } else {
            tryAgainButton.textContent = "Try again ! (" + localStorage.getItem("remainingChance") + " chances left)"
        }
    }
})

tryAgainButton.addEventListener("click", function(){
    hide(lostView);
    show(passwordView);
    instructionLabel.textContent = "Enter your code (" + localStorage.getItem("remainingChance") + " chances left)";
})