document.querySelectorAll(".dropdown__title").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown__nav");

    document.querySelectorAll(".dropdown__title").forEach(el => {
      if (el != btn) {
        el.classList.remove("active__btn");
      }
    });

    document.querySelectorAll(".dropdown__nav").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active");
      }
    })
    dropdown.classList.toggle("dropdown__title");
    btn.classList.toggle("active__btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header__bottom-left")) {
    document.querySelectorAll(".dropdown__nav").forEach(el => {
      el.classList.remove("active");
    })
    document.querySelectorAll(".dropdown__title").forEach(el => {
      el.classList.remove("active__btn");
    });
  }
})
