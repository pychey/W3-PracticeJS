function getRandomHexColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let container = document.getElementsByClassName("container");
let body = document.getElementsByTagName("body");
let mainText = document.getElementsByClassName("main-text");
let colorLabel = mainText[0].children[0];
let button = container[0].children[1];
button.addEventListener("click", function() {
    let randomColor = getRandomHexColor();
    body[0].style.backgroundColor = randomColor;
    colorLabel.textContent = randomColor;
});