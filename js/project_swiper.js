const swiperProject = new Swiper('.project__swiper', {
  allowTouchMove: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  breakpoints: {
    655: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1200: {
      spaceBetween: 50,
      slidesPerView: 3,
      slidesPerGroup: 1,
    }
  },
  navigation: {
    nextEl: '.project__button-next',
    prevEl: '.project__button-prev',
  },
});
