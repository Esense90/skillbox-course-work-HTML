var swiper1 = new Swiper('.gallery__swiper-container', {
  slidesPerView: 1,
  slidesPerColumnFill: 'row',
  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 35,
      slidesPerGroup: 2,
    },
    1368: {
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
});



