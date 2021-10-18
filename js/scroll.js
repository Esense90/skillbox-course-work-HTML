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

$(document).ready(function() {

  $("#nav").on("click", "a", function(event) {

    event.preventDefault();

    var id = $(this).attr('href'),

      top = $(id).offset().top;

    $('body,html').animate({ scrollTop: top }, 1700);

  });
});
