var swiper3 = new Swiper('.edition__right-swiper', {
  loop: 'true',
  allowTouchMove: false,
  slidesPerView: 2,
  slidesPerGroup: 2,
  spaceBetween: 50,
  breakpoints: {
    1405: {
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
