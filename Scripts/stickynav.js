var screenWidth = $(window).width();
if (screenWidth > 728) {
    $(window).scroll(function () {
        var hasScrolled = $(window).scrollTop();
        if (hasScrolled > 131) {
            $('.nav').css({ 'position': 'fixed', 'top': '0', 'z-index': '999' });
        } else {
            $('.nav').removeAttr('style');
        }
    });
}