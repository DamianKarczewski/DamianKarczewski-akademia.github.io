'use strict';

var button = document.getElementsByTagName('input')[0];
console.log(button);

//var licznik = false;

//if(licznik) {
//    ustawTlo();
//} else {
//    usunTlo();
//}

function ustawTlo() {
    button.value = 'Kliknij, aby usunąć backgrount color';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (element, index) {
        if (index % 2 == 0) {
            element.style.background = 'red';
        } else {
            element.style.background = 'yellow';
        }
    });
    button.removeEventListener('click', ustawTlo);
    button.addEventListener('click', usunTlo);
}


function usunTlo() {
    button.value = 'Kliknij, aby ustawić backgrount color';
    var paragraphs = document.querySelectorAll('p');
    paragraphs.forEach(function (element, index) {

        element.style.background = '';

    });
   
button.removeEventListener('click', usunTlo);
button.addEventListener('click', ustawTlo);
}

button.addEventListener('click', ustawTlo);