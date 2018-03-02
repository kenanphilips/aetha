$(document).ready(function () {
  $('.nav-link').on('click', function(e) {
    e.preventDefault();
    var section = $(this).attr('href').substr($(this).attr('href').indexOf('#'));
    var $section = $(section);

    $('html, body').animate({
      scrollTop: $section.offset().top + -100
    }, 1000);
  });

  $('.navbar-brand').click(function() {
    $('html, body').animate({scrollTop: 0}, 1000);
    return false;
  });
});
