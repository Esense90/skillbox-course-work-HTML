const projectSlider = document.querySelector('.project__swiper');
var mySwiperProject = new Swiper(projectSlider, {

  slideClass: 'project__swiper-item',
  navigation: {
    nextEl: '.project__button-next',
    prevEl: '.project__button-prev',
  },
  spaceBetween: 50,
  loop: true,
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    }
  },
});
