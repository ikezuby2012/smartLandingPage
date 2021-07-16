$(document).ready(function() {

    /* for the sticky navigation */
    $('.js-section-description').waypoint(function(direction) {
        if(direction == "down"){
            $('.nav-header').addClass('sticky')
        } else {
             $('.nav-header').removeClass('sticky')
        }
    }, {
        offset: '60px;'
    })

    /*scroll buttons */
    $('.js-scroll-to-product').click(function () {
        $('html, body').animate({scrollTop: $('.js-section-product').offset().top}, 1000)
    });

    /*navigation scroll */
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if(location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname== this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if(target.length){
                    $('html, body').animate({
                        scrollTop: target.offset.top
                    }, 5000);
                    return false;
                } 
            }
        });
    });  
});