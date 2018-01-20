'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

console.log(imiona);

imiona[3] = 'Ola';
imiona[2] = 'Wojtek';


imiona.push('Miłosz');

console.log(imiona);

var ostatniElement = imiona.pop();

console.log(ostatniElement);

console.log(imiona);


console.log(imiona.unshift('Robert'));

console.log(imiona.shift('Robert'));

console.log(imiona.length);

//console.log(imiona.join('));

//imiona.reverse();

//console.log(imiona);

imiona.sort();

var liczby = [1, 2, 0, 10, 12, 100, 55];

liczby.sort();

console.log(liczby);






