// Your code goes here
//1 - works MOUSEOVER
const navBar = document.querySelector(".nav"); 

navBar.addEventListener("mouseover", function()
{
    console.log("navBar");
    navBar.style.backgroundColor = "yellow";
});

//2 - works KEYDOWN
const pageBody = document.querySelector("body");

pageBody.addEventListener("keydown", () => {
    pageBody.style.backgroundColor = "green";
});

//3 - doesnt work WHEEL
const firstParagraph = document.querySelector("p");

firstParagraph.addEventListener("wheel", () =>{
    firstParagraph.style.fontSize = "30px";
})

//4  - works DRAG
const theIntro = document.querySelector(".intro");

theIntro.addEventListener("drag", ()=> 
{
    theIntro.style.display = "none";
});

//5 - doesnt work LOAD
const mainTitle = document.querySelector(".logo-heading");

mainTitle.addEventListener("load", () => {
    mainTitle.textContent = "You made it here!";
});

//6 - doesnt work AUDIO
const fartSound = document.createElement("audio");
navBar.appendChild(fartSound);
fartSound.textContent = "HELP";
fartSound.src = "mp3/fart-03.mp3";

//fartSound.addEventListener("click", () => {
// 
//})

//7 - not work CLICK
const h4Titles = document.querySelectorAll("h4");

console.log(h4Titles);

h4Titles.forEach((element)=> {
    element.addEventListener('click', (event) => {
        h4Titles.style.backgroundColor = "blue";
    })
})

//8 - RESIZE
//HOW do I do the whole thing?


//9 - not work SELECT
const allButtons = document.querySelectorAll(".btn");

allButtons.forEach((element)=> {
    element.addEventListener('select', (event) => {
        allButtons.textContent = "STOP!";
    })
})

//10- works DBLCLICK
const firstImage = document.querySelector("img");

firstImage.addEventListener("dblclick", () => {
    firstImage.style.transform = "scale(2.0)";
})


// WHAT IS BUBBLING? propagation
// WHAT IS THE TARGET?