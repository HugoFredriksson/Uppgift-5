// JavaScript

// Globala variabler
let inputElem; 
let msgElem;
let fruitNames; 
let fruitNr;
let selFruitsElem;


// Funktion som körs då hela webbsidan är inladdad, dvs då all HTML-kod är utförd.
// Initiering av globala variabler samt koppling avfunktioner till knapparna.
function init() {
    fruitNames = ["ingen frukt","äpple", "banan", "citron", "apelsin", "päron"];
    fruitNr = 0;
    inputElem=[];
    inputElem[1]=document.getElementById("input1");
    inputElem[2]=document.getElementById("input2");
    inputElem[3]=document.getElementById("input3");
    selFruitsElem = document.getElementById("selectedFruits");
    msgElem=document.getElementById("message");
    document.getElementById("btn1").onclick=showFruit;
    document.getElementById("btn2").onclick=checkName;
    document.getElementById("btn3").onclick=addFruits;
} // End init
window.onload = init; // Se till att init aktiveras då sidan är inladdad

function showFruit() {
    let nr;
    let fruitUrl;

    nr = getNr(1,5);

    if (getNr !== null) {
        fruitUrl = "./pics/fruit"+ nr +".jpg";  
       document.getElementById("fruitImg").src = fruitUrl;
    } else {
        msgElem.innerHTML = "<p>:-(</p>"
    }

    fruitNr = nr;
}

function checkName() {
    let name;
    name = inputElem[2].value;

    if (fruitNr === 0) {
        msgElem.innerHTML = "<p>Du måste välja frukt</p>";
        return NULL;
    }

    if (name === fruitNames[fruitNr]) {
        msgElem.innerHTML = "<p>Rätt namn</p>";
    }
    else {
        msgElem.innerHTML = "<p>Fel namn</p>";
    }
}
function getNr(elemNr, high) {
    let nr;
    nr = (inputElem[elemNr].value);
    
    if(isNaN(nr)){
        console.log("It is not a number");
        msgElem.innerHTML = "<p>Skriv in en siffra</p>";
        return null;
   }

   if(nr>=1&&nr<=high){ // Siffran givet av användaren väljer en frukt i galleriet och skriver ut det
       nr = parseInt(nr);
       inputElem[elemNr].value = nr; 
       console.log(nr);
   } else {
    return null;
   }
   return nr;
    
}

function addFruits() {
    let amount;
    let imgList;

    amount = inputElem[1].value;
    imgList = selFruitsElem = fruitUrl;
    if (name === fruitNames[fruitNr]) {

    } else {
        return;
    }
}

