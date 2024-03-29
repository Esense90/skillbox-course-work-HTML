(function() {

  const swiperParams = {
    slidesPerView: 1,
    spaceBetween: 5,

    pagination: {
      el: '.events__swiper-pagination',
      type: 'bullets',
      clickable: 'true',
    },
    breakpoints: {
      700: {
        slidesPerColumnFill: 'row',
        allowTouchMove: false,
        pagination: false,
        slidesPerView: 2,
        slidesPerColumn: 1,
        spaceBetween: 33,
      },

      992: {
        slidesPerColumnFill: 'row',
        allowTouchMove: false,
        pagination: false,
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 28,
      },

      1400: {
        slidesPerColumnFill: 'row',
        allowTouchMove: false,
        pagination: false,
        slidesPerView: 3,
        slidesPerColumn: 1,
        spaceBetween: 50,
      }
    },
  }

  const eventsSlider = new Swiper('.events__cards-swiper', swiperParams)

  const allEventsBtn = document.querySelector('.events__footer-button');

  allEventsBtn.addEventListener('click', _ => {
    if (window.innerWidth < 992) {
      swiperParams.breakpoints[700].slidesPerColumn = Math.round(document.querySelectorAll('.events__cards-swiper .events__swiper-slide').length / 2);
    } else if (window.innerWidth < 1399) {
      swiperParams.breakpoints[992].slidesPerColumn = Math.round(document.querySelectorAll('.events__cards-swiper .events__swiper-slide').length / 3);
    } else {
      swiperParams.breakpoints[1400].slidesPerColumn = Math.round(document.querySelectorAll('.events__cards-swiper .events__swiper-slide').length / 3);
    }

    eventsSlider.destroy();

    new Swiper('.events__cards-swiper', swiperParams);

    allEventsBtn.remove()
  })

})();

eventsBtn.onclick = function remove() {
  document.querySelectorAll('#eventHdn1 button, #eventHdn2 button')
    .forEach(node => node.removeAttribute('tabindex'));
}
