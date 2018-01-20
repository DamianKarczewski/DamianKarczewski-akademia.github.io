'use strict';

//tworzenei klas
//class User{
//    constructor(imie, nazwisko) {
//        this.imie = imie;
//        this.nazwisko = nazwisko;
//        
//    }
//}
//
//var milosz = new User('Miłosz', 'Kowalski');

//$(function() {
//    alert('test');
//}); 

$(function(){
    //pobieranie elementu po znaczniku
    var paragrafy = $('p');
    console.log(paragrafy);
    
    //pobieranie elementu po id
    
    var paragbrafById = $('#paragraf');
    console.log(paragbrafById);
    
    //pobieranie elementu po klasie
    var paragrafByClassName = $ ('paragfaf-nex');
    console.log(paragbrafById);
});