var logoTop = $('.logo').offset().top;
console.log(logoTop);

$(window).on('scroll', function() {
    var wScroll = $(this).scrollTop();
    
    $('.logo').css({
        transform: `translateY(${wScroll/5}%)`
    });

    // $('.logo').offset({
    //     top: (logoTop + wScroll)
    // });

    $('.fore-bird').css({
        transform: `translateY(-${wScroll/10}%)`
    });

    $('.back-bird').css({
        transform: `translate(${wScroll/4}%, ${wScroll/3}%)`
    });

    if (wScroll > $('.models').offset().top) {
        console.log(wScroll > $('.models').offset().top);
        
        $('.image').each(function(index){
            
            setTimeout(function() {
                $('.image').eq(index).addClass('landing');
            }, (150 * (index + 1)));
            
         });

    } else {
        $('.image').each(function(index){
            
            setTimeout(function() {
                $('.image').eq(index).removeClass('landing');
            }, (150 * (index + 1)));
            
         });
    }



});

// parallax

$('.parallax').on('mousemove', function(e) {
    var x = e.pageX;
    var y = e.pageY - $('.parallax').offset().top;
    
    $('#object-01').css({
        transform: `translate(-${x/12}px, -${y/12}px) rotate(${x/20}deg)`
    });

    $('#object-02').css({
        transform: `translate(-${x/14}px, -${y/8}px)`
    });

    $('#object-03').css({
        transform: `translate(-${x/9}px, -${y/9}px) rotateZ(-${x/40}deg)`
    });
    $('.layer').css({
        transform: `translate(-${x/20}px, ${y/20}px) scaleZ(${x/1600 + 1})`
    });
});