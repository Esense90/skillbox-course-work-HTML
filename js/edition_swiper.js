var swiper3 = new Swiper('.edition__right-swiper', {
  loop: 'true',
  allowTouchMove: false,
  slidesPerView: 'auto',
  spaceBetween: 50,
  navigation: {
    nextEl: '.edition__button-next',
    prevEl: '.edition__button-prev',
  },
  pagination: {
    el: '.edition__swiper-pagination',
    type: 'fraction',
  },
});