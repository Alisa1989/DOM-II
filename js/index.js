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

//3 -  works WHEEL
const firstParagraph = document.querySelector("p");

firstParagraph.addEventListener("wheel", (event) =>{
    event.preventDefault();
    // firstParagraph.style.backgroundColor = "red";
    firstParagraph.style.fontSize = "50px";
})

//4  - works DRAG
const theIntro = document.querySelector(".intro");

theIntro.addEventListener("drag", ()=> 
{
    theIntro.style.display = "none";
});

//5 -  work LOAD
const mainTitle = document.querySelector(".logo-heading");

window.addEventListener("load", () => {
    mainTitle.textContent = "You made it here!";
});

//6 - doesnt work AUDIO
//const fartSound = document.createElement("audio");
//navBar.appendChild(fartSound);
// fartSound.textContent = "HELP";
//fartSound.src = "mp3/fart-03.mp3";
//fartSound.setAttribute("controls");

//fartSound.addEventListener("click", () => {
// 
//})

//7 - works CLICK
const h4Titles = document.querySelectorAll("h4");

h4Titles.forEach((element)=> {        
    element.addEventListener('click', () => {
    element.style.backgroundColor = "aqua";
    element.style.textAlign = "center";

    })
})

//8 - 


//9 - not work SELECT - fixable
const allButtons = document.querySelectorAll(".btn");

allButtons.forEach((element)=> {
    element.addEventListener('select', (event) => {
        element.textContent = "STOP!";
    })
})

//10- works DBLCLICK
const firstImage = document.querySelector("img");

firstImage.addEventListener("dblclick", () => {
    firstImage.style.transform = "scale(2.0)";
})
