'use strict';

var wzrostMateusz = 190;
var wzrostOlgi = 160;

/* Warunek if */

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
}

/* warunek if else */

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
} else {
    console.log("Olga nie jest niższa");
}

/* warunek if else if */
if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa");
} else if (wzrostOlgi == wzrostMateusz) {
    console.log("Olga jest tak wysoka jak Mateusz");
} else {
    console.log("")
}

/* warunek switch */

var kolor = 'zielony';
switch (kolor) {
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('inny kolor');
}




