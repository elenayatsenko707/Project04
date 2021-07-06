$('.wrapper').addClass('loaded');
$(document).ready(function(){
    $(".mobile-button").on("click",function(){
        $(".navigation").slideToggle();
        $(this).toggleClass("opened");
    });
});
function ibg(){
    $.each($('.ibg'), function(index, val) {
        if($(this).find('img').length>0){
            $(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
        }
    });
}
ibg();
$(document).ready(function() {

    const swiper = new Swiper('.main-slider', {
        loop: true,
        autoplay: {
            delay: 3000,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        // navigation: {
        //     nextEl: '.slider__next',
        //     prevEl: '.slider__prev',
        // }
    });
    $( ".projects__tabs" ).tabs();
    const playButton =$("#video__play");
    const content = $ ('.video__content');
    playButton.on("click", function() {
        if (video.paused == true) {
        video.play();
        content.addClass('hidden');
 
    } else {
        video.pause();
        content.removeClass('hidden');

     }
    });
});


