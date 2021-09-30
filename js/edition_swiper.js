const editionSlider = document.querySelector('.edition__right-swiper');

let swiperEdition;
const desctopSlider = () => {

  if (window.innerWidth >= 700 && editionSlider.dataset.desktop == 'true') {
    swiperEdition = new Swiper(editionSlider, {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 5,
      pagination: {
        el: '.edition__swiper-pagination',
        type: 'fraction',
      },

      navigation: {
        nextEl: '.edition__button-next',
        prevEl: '.edition__button-prev',
      },

      breakpoints: {
        768: {
          allowTouchMove: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 30,
        },
        1000: {
          allowTouchMove: false,
          slidesPerView: 2,
          slidesPerGroup: 2,
          spaceBetween: 50,
        },
        1060: {
          allowTouchMove: false,
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 34,
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
      }
    })

    editionSlider.dataset.desktop == 'false'
  }

  if (window.innerWidth <= 700) {
    editionSlider.dataset.mobile = 'false';

    if (editionSlider.classList.contains('swiper-container-initialized')) {
      swiperEdition.destroy();
    }
  }
}

desctopSlider();

window.addEventListener('resize', () => {
  desctopSlider();
})
