$(function () {
  $(".catalog__accordion").accordion({
    collapsible: true,
    heightStyle: "content",
    active: 0,
    animate: 400,
    icons: false,

    activate: function(event,ui) {
      console.log(ui);
      if (ui.oldHeader[0]) {
        ui.oldHeader[0].closest('.catalog__accordion-item').
          classList.remove('catalog__accordion_active')
      }
      if (ui.newHeader[0]) {
        ui.newHeader[0].closest('.catalog__accordion-item').
          classList.add('catalog__accordion_active')
      }
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.accordion__content-btn').forEach(function (catalofCountriesItem) {
    catalofCountriesItem.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.accordion__content-btn').forEach(function (catalogCountriesDiscriptionCard) {
        catalogCountriesDiscriptionCard.classList.remove('accordion__artist-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('accordion__artist-active')
    })
  })
})