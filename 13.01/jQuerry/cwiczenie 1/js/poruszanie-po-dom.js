$(function () {
    //    var paragrafy = 
    $('body').find('p').eq(1).css('color', 'green');
    //    console.log(paragrafy);

    //pEtla each - dodająca do pararafów klasę z kilejnym numerem
    $('p').each(function (index, element) {
        $(this).addClass('paragraf-' + index);
    });

});
