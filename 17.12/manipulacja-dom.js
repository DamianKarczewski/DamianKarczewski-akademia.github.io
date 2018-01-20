'use strict';

var mainHeader = document.getElementById('main-header');
mainHeader.innerHTML = 'Treść nagłówka';

var p = document.querySelector('header').children[0];
console.log(p);
console.log(p.innerHTML);
console.log(p.outerHTML);
console.log(p.innerText);

var link = document.getElementsByClassName('link')[0];
link.href = "http://google.pl";

link.className += ' nowa klasa'; //link.className = link.className + 'nowa-klasa';

mainHeader.style.color = '#11aa22';