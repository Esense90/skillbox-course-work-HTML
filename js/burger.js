window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__top-nav').classList.toggle('header__nav-active')
  })
  document.querySelector('.header__burger-active').addEventListener('click', function() {
    document.querySelector('.header__top-nav').classList.remove('header__nav-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.header__burger').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.toggle('header__burger-active')
  })
  document.querySelector('.header__burger-active').addEventListener('click', function() {
    document.querySelector('.header__burger').classList.remove('header__burger-active')
  })
})
