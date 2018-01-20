$(function() {
    
    $('#przycisk').click(function(){
        $.getJSON('https://jsonplaceholder.typicode.com/users', function(data){
            $('#lista-uzytkownikow').text('');
            data.forEach(function(element, index){
                $("#lista-uzytkownikow").append(element.username + '</br>');
            });
//            console.log(data);
        });
        
    
    });
    
//    $.getJSON('http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl', function(data){
//        console.log(data.userName)
//    });
    for(var i =0; i < data.length; i++){
        
    }
    
});