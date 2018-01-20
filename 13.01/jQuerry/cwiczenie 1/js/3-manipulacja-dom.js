$(function(){
 //pobieranie tekstu
    var tekstParagrafuPierwszego = $('p:first');
    console.log(tekstParagrafuPierwszego.text());
    
    console.log(tekstParagrafuPierwszego.html());
    
    //dodawanie HTML
    $('.paragraf-next').html("To jest <strong>paragraf</strong> z dodanym HTML");
    
    //dodanie treści na końcu selektora
    $('.paragraf-next').append('Treść na końcu selektora');
    
    //dodanie treści za selektorem
    $('.paragraf-next').after('Treść za selektorem');
    
    $('#paragraf').empty();
    
    //dodawanie CSS
    $('h3').css({'color':'green', 'font-size': '5em'});
    
    ///dodanie klasy CSS
    $('h1').addClass('klasa-testowa druga-klasa');
    
    $('h1').removeClass('klasa-z-HTML');
    
    //dodanie atrybutu
    $('h1').attr('nazwa-atrybutu', 'wartosc-atrybutu');
    
    $('paragraf-next').attr('id', 'id-1');
});