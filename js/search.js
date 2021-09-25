document.addEventListener('DOMContentLoaded', () => {

  const button = document.querySelector('.header__search')
  const wrapper = document.querySelector('.search__wrapper')
  const close = document.querySelector('.header__form-close')
  const searchnone = document.querySelector('.header__search')
  const burger = document.querySelector('.header__burger')

  button.addEventListener('click', () => {
    wrapper.classList.toggle('search__wrapper-active')
    burger.classList.add('burger__opacity')
  })
  button.addEventListener('click', () => {
    searchnone.classList.toggle('search__none')
  })
  close.addEventListener('click', () => {
    wrapper.classList.toggle('search__wrapper-active')
  })
  close.addEventListener('click', () => {
    searchnone.classList.remove('search__none')
  })
  close.addEventListener('click', () => {
    burger.classList.remove('burger__opacity')
  })

  window.addEventListener('click', e => {
    const target = e.target
    if (!target.closest('.search__wrapper') && !target.closest('.header__search')) {
      wrapper.classList.remove('search__wrapper-active')
    }
    window.addEventListener('click', e => {
      const target = e.target
      if (!target.closest('.search__wrapper') && !target.closest('.header__search')) {
        searchnone.classList.remove('search__none')
      }
      window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.search__wrapper') && !target.closest('.header__search')) {
          burger.classList.remove('burger__opacity')
        }
      })
    })
  })
})
