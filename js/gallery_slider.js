var swiper1 = new Swiper('.gallery__swiper-container', {
  slidesPerColumnFill: 'column',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  breakpoints: {
    667: {
      slidesPerColumnFill: 'row',
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerColumnFill: 'row',
      spaceBetween: 10,
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1405: {
      slidesPerColumnFill: 'row',
      slidesPerView: 3,
      slidesPerColumn: 2,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
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
