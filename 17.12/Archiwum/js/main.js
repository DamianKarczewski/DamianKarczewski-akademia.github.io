'use strict';

function walidujFormularz(event) {
    var wiadomosc = document.getElementById('wiadomosc');

    wiadomosc.innerHTML='';
    
    if (document.getElementById('name').value.trim().(length < 1) {
            var msgImie = document.createElement('li').innerHTML = 'Wpisz imię!';
            wiadomosc.appendChild(msgImie);
    
    event.preventDefault();
        }
    }

    document.getElementById('wyslij').addEventListener('click', walidujFormularz);
