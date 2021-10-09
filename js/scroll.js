$('button.accordion__content-btn').on('click', function(event) {

  event.preventDefault();

  var $anchor = $(this).attr('data-link');

  if ($(window).width() < 893) {

    setTimeout(function() {

      $('html, body').stop().animate({

        scrollTop: $('.block-' + $anchor).offset().top
      }, 900);
    }, 0.1);
  }
});