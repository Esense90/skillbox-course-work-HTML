window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.search__wrapper').classList.toggle('search__wrapper-active')
  })
  document.querySelector('.header__search-top').addEventListener('click', function() {
    document.querySelector('.search__wrapper').classList.remove('search__wrapper-active')
  })
  document.querySelector('.header__form-close').addEventListener('click', function() {
    document.querySelector('.search__wrapper').classList.remove('search__wrapper-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__search').addEventListener('click', function() {
    document.querySelector('.header__search').classList.toggle('header__search-active')
  })
  document.querySelector('.header__search-top').addEventListener('click', function() {
    document.querySelector('.header__search').classList.remove('header__search-active')
  })
  document.querySelector('.header__form-close').addEventListener('click', function() {
    document.querySelector('.header__search').classList.remove('header__search-active')
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__search")) {
    document.querySelectorAll(".search__wrapper").forEach(el => {
      el.classList.remove("search__wrapper-active");
    })
    document.querySelectorAll(".search__wrapper").forEach(el => {
      el.classList.remove("search__wrapper-active");
    });
    document.querySelectorAll(".header__search").forEach(el => {
      el.classList.remove("header__search-active");
    });
  }
})
