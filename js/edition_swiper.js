var swiper3 = new Swiper('.edition__right-swiper', {
  loop: 'true',
  allowTouchMove: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 0,
  breakpoints: {
    894: {
      allowTouchMove: false,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1110: {
      allowTouchMove: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 34,
    },
    1405: {
      allowTouchMove: false,
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  },
  navigation: {
    nextEl: '.edition__button-next',
    prevEl: '.edition__button-prev',
  },
  pagination: {
    el: '.edition__swiper-pagination',
    type: 'fraction',
  },
});

