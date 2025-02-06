//Q1
// JS file is linked to html using script element with 
// attribute src="path to js file" wihtin body of html file.

//Q2
let container1 = document.getElementById("container1");
let item3 = container1.children[2];
let container2 = document.getElementById("container2");
container2.appendChild(item3);

//Q3
let item4 = container2.children[0];
item4.remove();

//Q4
let item10 = document.createElement("div");
item10.className = "item";
item10.textContent = "10";
let container3 = document.getElementById("container3");
container3.appendChild(item10);

//Q5
let containerBlue = document.getElementsByClassName("containerBlue");
for(let i=0; i<containerBlue.length; i++){
    containerBlue[i].style.color = "red";
}
