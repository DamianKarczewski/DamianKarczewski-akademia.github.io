'use strict';

var istniejacyWezel = document.getElementById('parFirst').children[1];
console.log(istniejacyWezel);

var newElement = document.createElement('p'); //stwórz nowy element p

var newElementContent = document.createTextNode('To jest nowy paragraf'); //stworzenie nowego tekstu do paragrafu

newElement.appendChild(newElementContent);

console.log(newElement);

istniejacyWezel.appendChild(newElement);

istniejacyWezel.removeChild(newElement);

var parFirstDiv = document.getElementById('parFirst');

parFirstDiv.replaceChild(newElement, istniejacyWezel);

/* Dodaj znacznik <br> po każdym linku i usuń z nich atrybut klasy */


var allLinks = document.getElementsByTagName('a');
console.log(allLinks);

//var br = document.createElement('br');
//for (var i = 0; i < allLinks.length; i++) {
//    allLinks[i].removeAttribute('class');
//    allLinks[i].parentElement.insertBefore(br, allLinks[i].nextSibling);
//}

allLinks.forEach(function(element){
    var br = document.createElement('br');
    
})
