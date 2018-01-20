//$( window).onscroll(function() {
//  $( "window" ).append( "<div>Handler for .scroll() called.</div>" );
//    
//    console.log(window);
//});

//$(function () {
//    window.scroll(function () {
//        if (window.scrollTop() == $(document).height() - window.height()) {
//            $.ajax({
//                url: 'https://jsonplaceholder.typicode.com/users',
//                success: function (data) {
//                    data.forEach(function (element) {
//                        $('p:last').after('<p>User ID:' + element.id + '<p>');
//                    });
//
//                },
//                error: function (response) {
//                    console(response.responseText);
//                },
//
//
//            });
//        };
//    });
//
//});
//
//$(function () {


    $(window).scroll(function () {
        if ($(window).scrollTop() == $(document).height() - $(window).height()) {
            $.ajax({
                url: 'https://jsonplaceholder.typicode.com/users',
                success: function (data) {
                    data.forEach(function (element) {
                        $('ul').after('<br />' + '<p>User ID: ' + element.id + '</p>' + '<p>User name: ' + element.username + '</p>' + '<p>User url: ' + element.website + '</p>');

                    });
                },
                error: function (response) {
                    console.log(response.responseText);
                }
            });
        }

    });

