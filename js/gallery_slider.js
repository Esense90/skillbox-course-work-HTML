var swiper1 = new Swiper('.gallery__swiper-container', {
  slidesPerColumnFill: 'row',
  slidesPerView: 3,
  slidesPerColumn: 2,
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
