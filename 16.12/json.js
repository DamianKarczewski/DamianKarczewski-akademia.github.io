'use strict';

var jsonOsoby = {
    "osoby": [
        {
            imie: 'Krystian',
            nazwisko: 'Dziopa',
            wzrost: 180,
            zainteresowania: [
                {
                    nazwa: 'podróże'
                },
                {
                    nazwa: 'gotowanie'
                }]
            },
        {
            imie: 'Jan',
            nazwisko: 'Kowalski',
            wzrost: 150,
            zainteresowania: [
                {
                    nazwa: 'piłka nożna'
            }]
        },
        {
            imie: 'Ewelina',
            nazwisko: 'Nowak',
            wzrost: 190,
            zainteresowania: [
                {
                    nazwa: 'szydełkowanie'
                    },
                {
                    nazwa: 'gotowanie'
                    }
                ]
            }

]
}

console.log(jsonOsoby);

jsonOsoby.osoby[0].zainteresowania.forEach(function (element, index) console.log(element.nazwa));

console.log(jsonOsoby.osoby[0].zainteresowania[1].nazwa);

jsonOsoby.osoby.forEach(function (element, index) console.log(element.imie));

console.log(jsonOsoby.osoby[0].imie);

jsonOsoby.osoby.forEach(function (element, index) console.log(element.wzrost));

console.log(jsonOsoby.osoby[0].wzrost);



