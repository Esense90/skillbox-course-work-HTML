document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.header__search')
  const wrapper = document.querySelector('.search__wrapper')
  const close = document.querySelector('.header__form-close')

  button.addEventListener('click', () => {
    wrapper.classList.toggle('search__wrapper-active')
  })
  close.addEventListener('click', () => {
    wrapper.classList.toggle('search__wrapper-active')
  })

  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.search__wrapper') && !target.closest('.header__search')) {
      wrapper.classList.remove('search__wrapper-active')
    }
  })
})
