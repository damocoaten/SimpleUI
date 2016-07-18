$(document).ready(function(){
    var content = $('.tabs-content div');
    var links = $('.tabs-links-li a')
    content.hide();
    $('.js-tabs-start').show();
    $(links).on('click | touchend', function(e){
        e.preventDefault();
        var number = $(this).attr('href'); 

        $('.tabs-links-li a').removeClass('tabs-active');       
        content.hide();

        $(this).addClass('tabs-active');
        $('#' + number).show();
    });
});