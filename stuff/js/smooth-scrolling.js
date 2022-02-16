// Smooth scrolling with offset
$('a[href^="#"]').on('click', function (e) {
    // e.preventDefault();

    var target = this.hash,
        $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 100
    }, 200, 'swing', function () {
        window.location.hash = target;
    });
});