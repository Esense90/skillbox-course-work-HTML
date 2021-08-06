window.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.dropdown__title').forEach(element => {
    element.addEventListener('click', function () {
      element.parentNode.querySelector('.dropdown__nav').classList.toggle('active')
      element.parentNode.querySelector('.dropdown__nav').classList.add('animate__fadeIn')
    })
  })
})



