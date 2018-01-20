'use stricy';

function alarm(event){
    event.preventDefault(); //zapobiegamy domyślnej akcji
    console.log('kliknięto w link');
    console.log(event.type);
}

var secondLink = document.getElementsByTagName('a')[1];

secondLink.onclick = alarm;

var thirdLink = document.getElementsByTagName('a')[2];

thirdLink.addEventListener('click', alarm);

thirdLink.addEventListener('click', function(){
    alert('funkcja anonimowa')
});

//thirdLink.removeEventListener('click', alarm);

function klikHeader() {
    console.log('Kliknąłeś w header');
}

document.getElementsByTagName('header')[0].onclick = klikHeader;

function klikH1(event) {
    event.stopPropagation();
    console.log('Kliknąłeś w h1');
}

document.getElementsByTagName('h1')[0].onclick = klikH1;

