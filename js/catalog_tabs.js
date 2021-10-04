document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__country-item').forEach(function(catalofCountriesItem) {
    catalofCountriesItem.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__countries-discription_content').forEach(function(catalogCountriesDiscriptionCard) {
        catalogCountriesDiscriptionCard.classList.remove('catalog__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__active')
    })
  })
})


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__country-btn').forEach(function(catalogCountryItem) {
    catalogCountryItem.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__country-btn').forEach(function(catalogCountryItem) {
        catalogCountryItem.classList.remove('country__btn-active')
      })
      event.currentTarget.classList.add('country__btn-active')
    })
  })
})


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__accordion-content_item').forEach(function(catalofCountriesItem) {
    catalofCountriesItem.addEventListener('click', function(event) {
      const btn = event.currentTarget.dataset.btn
      document.querySelectorAll('.catalog__countries-discription_card').forEach(function(catalogCountriesDiscriptionCard) {
        catalogCountriesDiscriptionCard.classList.remove('painter__active')
      })
      document.querySelector(`[data-view="${btn}"]`).classList.add('painter__active')
    })
  })
})
