$(document).ready(function(){
    var content = $('.accordion-content');
    var link = $('.accordion-link');
    content.slideUp();
    $('.js-accordion-start').slideDown();
    $(link).on('click | touchend', function(){
        $(link).removeClass('accordion-active');
        content.slideUp();

        $(this).addClass('accordion-active')
        $(this).next().slideDown();
    });
});