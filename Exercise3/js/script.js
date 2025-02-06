const COLORS = ["red", "blue", "green","grey","white","cyan","lime","purple","orange"]
// Get a random color among the list of available colors
function randomColor() {
const randomIndex = Math.floor(Math.random() * COLORS.length);
return COLORS[randomIndex];
}

function createCard(){
    let card = document.createElement("div");
    card.className = "card";
    let p = document.createElement("p");
    p.textContent = "Description";
    let cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    let removeButton = document.createElement("button");
    removeButton.textContent = "Remove Card";

    card.appendChild(p);
    card.appendChild(cardFooter);
    cardFooter.appendChild(removeButton);
    card.style.backgroundColor = randomColor();

    removeButton.addEventListener("click", function(){
        card.remove();
    })
    return card;
}

let header = document.getElementsByClassName("header");
let formGroup = header[0].children[0];
let createButton = formGroup.children[0];

createButton.addEventListener("click",function(){
    let newCard = createCard();
    let container = document.getElementsByClassName("container");
    container[0].appendChild(newCard);
})