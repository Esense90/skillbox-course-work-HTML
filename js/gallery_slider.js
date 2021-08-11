var swiper1 = new Swiper('.gallery__swiper-container', {
  slidesPerColumnFill: 'row',
  slidesPerColumn: 2,
  slidesPerView: 'auto',
  slidesPerGroup: 3,
  spaceBetween: 50,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
  },
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
});