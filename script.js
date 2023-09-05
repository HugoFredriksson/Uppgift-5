// JavaScript

// Globala variabler
let inputElem; 
let msgElem;
let fruitNames; 
let fruitNr;


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    fruitNames = ["ingen frukt","äpple", "banan", "citron", "apelsin", "päron"];
    fruitNr = 0;
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    msgElem=document.getElementById("message");
    document.getElementById("btn1").onclick=showFruit;
    document.getElementById("btn2").onclick=checkName;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() {
    let nr;
    let fruitUrl;

    nr = Number(inputElem[1].value);
    nr = parseInt(nr);

    if(isNaN(nr)){
         console.log("It is not a number");
         msgElem.innerHTML = "<p>Skriv in en siffra</p>";
    }

    if(nr>=1&&nr<=5){ // Siffran givet av användaren väljer en frukt i galleriet och skriver ut det
        inputElem[1].value = nr; 
        console.log(nr);
         fruitUrl = "./pics/fruit"+ nr +".jpg";  
        document.getElementById("fruitImg").src = fruitUrl;
    }else{
        msgElem.innerHTML = "<p>Skriv in en siffra mellan 1 och 5</p>";
        return;
    } 
    fruitNr = nr;
}
function checkName() {
    let name;
    name = Number(inputElem[2].value);

    if (fruitNr = 0) {
        msgElem.innerHTML = "<p>Du måste skriva en frukt! >:-(</p>";
        return;
    }

}