$(function() {

  $('.accordion__content-btn').click(function() {

    var artist = $(this).attr('data-link');

    var block = $(`.catalog__countries-discription_card[data-view="${artist}"]`),

      top = $(block).offset().top;

    if ($(window).width() < 893) {

      $('html, body').animate({ scrollTop: top }, 1000)
    }
  });
});
