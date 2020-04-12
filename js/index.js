// Your code goes here
//1 - works
const navBar = document.querySelector(".nav"); 

navBar.addEventListener("mouseover", function()
{
    console.log("navBar");
    navBar.style.backgroundColor = "yellow";
});

//2 - works
const pageBody = document.querySelector("body");

pageBody.addEventListener("keydown", () => {
    pageBody.style.backgroundColor = "green";
});

//3 - doesnt work
const firstParagraph = document.querySelector("p");

firstParagraph.addEventListener("wheel", () =>{
    firstParagraph.style.fontSize = "30px";
})

//4  - works
const theIntro = document.querySelector(".intro");

theIntro.addEventListener("drag", ()=> 
{
    theIntro.style.display = "none";
});

//5 - doesnt work
const mainTitle = document.querySelector(".logo-heading");

mainTitle.addEventListener("load", () => {
    mainTitle.textContent = "You made it here!";
});

//6 - doesnt work
const fartSound = document.createElement("audio");
navBar.appendChild(fartSound);
fartSound.textContent = "HELP";
fartSound.src = "mp3/fart-03.mp3";

//fartSound.addEventListener("click", () => {
// 
//})

//7 - look at his class again and do what he did




