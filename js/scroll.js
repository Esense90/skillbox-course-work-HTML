  $(function() {
    $("#artists").on("click", "a", function(event) {

      event.preventDefault();

      var block = $(this).attr('href'),

        top = $(block).offset().top;

      $('body,html').animate({ scrollTop: top }, 500);
    });
  });

  $(function() {
    $("#nav").on("click", "a", function(event) {

      event.preventDefault();

      var block = $(this).attr('href'),

        top = $(block).offset().top;

      $('body,html').animate({ scrollTop: top }, 400);
    });
  });
