$(function () {
    //popjedncze zdarzenie na praragrafie

    function klikH1() {
        alert('Kliknięto w H1');
        $('h1').off('click', klikH1);
    }

    $('p').click(function () {
        $(this).css('color', 'red');

    });

    $('h1').on({
        'click': klikH1,
        'mouseover': function () {
            $(this).css('color', 'green');
        }
    });


});
 