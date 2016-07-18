var open = $('#menuOpen');
var close = $('#menuClose');

close.hide();

open.on('click | touchend', function(){
    $('.nav-ul').addClass('nav-open');
    open.hide();
    close.show();
});

close.on('click | touchend', function(){
    $('.nav-ul').removeClass('nav-open');
    close.hide();
    open.show();
})