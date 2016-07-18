$(document).ready(function(){
    $('.enquiry-main').slideUp();

    $('#enq-open').on('click', function(){
        $('.enquiry-main').slideToggle();
        $('#initial').focus();
    });
});