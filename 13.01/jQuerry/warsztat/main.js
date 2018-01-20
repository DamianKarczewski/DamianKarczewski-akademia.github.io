$(function () {
    var slideShow = $('.slide-show');
    var slideCount = $('.single-slide').length;
    var slideWidth = 100 / slideCount;
    var slideIndex = 0;

    //Serokość kontenera .slide-show
    slideShow.css('width', slideCount * 100 + '%');

    //nadaj każdemu slajdowi szerokość i lewy margines
    slideShow.find('.single-slide').each(function (index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': slideWidth * index + '%'
        });
    });

    //obsługa nawigacji

    $('.prev-slide').click(function () {
        slide(slideIndex - 1);
    });

    $('.next-slide').click(function () {
        slide(slideIndex + 1);
    });
    
    //funkcja slide
    
    function slide(newSlideIndex){
        if(newSlideIndex < 0 || newSlideIndex >= slideCount){
            return;
        }
        
        var slideCaption = $('.slide-caption').eq(newSlideIndex);
        var marginLeft = (newSlideIndex * (-100)) + '%';
        
        slideCaption.hide();
        
        slideShow.animate({'margin-left': marginLeft}, 800, function(){
            slideIndex = newSlideIndex;
            slideCaption.fadeIn();
        });
    }
    
});
