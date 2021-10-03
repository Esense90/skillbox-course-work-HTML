var swiper1 = new Swiper('.gallery__swiper-container', {
  slidesPerColumnFill: 'row',
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 10,
  breakpoints: {
    600: {
      slidesPerColumnFill: 'row',
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 25,
    },
    1024: {
      slidesPerColumnFill: 'row',
      slidesPerView: 2,
      slidesPerColumn: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
    },
    1100: {
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
  observer: true,
  observeParents: true,
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },
  on: {
    beforeResize: function() {
      this.slides.forEach((el) => {
        el.style.marginTop = "";
      });
    }
  }
});
