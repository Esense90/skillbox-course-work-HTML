var swiper4 = new Swiper('.project__swiper', {
  allowTouchMove: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  breakpoints: {
    710: {
      spaceBetween: 50,
      slidesPerView: 2,
      slidesPerGroup: 2,
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
  }
});
