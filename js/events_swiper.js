document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.events__footer-button').forEach(function (footerButton) {
    footerButton.addEventListener('click', function (event) {
      document.querySelectorAll('.events__cards-item').forEach(function (cardsItem) {
        cardsItem.classList.remove('events__cards-hidden')
      })
      document.querySelectorAll('.events__footer-button').forEach(function (cardsItem) {
        cardsItem.classList.add('events__cards-hidden')
      })
    })
  })
})

