function checkboxToggle() {
  let btn = document.querySelector(".edition__checkbox-title");
  let items = document.querySelectorAll(".edition__checkbox-item");
  let listitems = document.querySelector(".edition__checkbox-list");
  btn.addEventListener("click", toggleSpoiler);
  btn.addEventListener("keyup", function(e) {
    console.log(e.key);
    if (e.code === "Enter") {
      toggleSpoiler();
    }
  })

  function toggleSpoiler() {
    if (!listitems.classList.contains("checklist-active")) {
      listitems.classList.add("checklist-active");
      items.forEach(item => {
        animationItem(item, "checkbox__active", "animation-test", "add");
      })
    } else {
      listitems.classList.remove("checklist-active");
      items.forEach(item => {
        if (item.querySelector(".edition__checkbox-input").checked) {
          animationItem(item, "checkbox__active", "animation-test", "add");
        } else {
          animationItem(item, "checkbox__active", "animation-test", "remove");
        }
      });
    }
    items.forEach(item => {
      item.addEventListener("click", function() {
        if (!listitems.classList.contains("checklist-active")) {
          animationItem(this, "checkbox__active", "animation-test", "remove");
        }
      });
    })
  }

  function animationItem(item, class1, class2, f) {
    if (f === "add") {
      item.classList.add(class1);
      setTimeout(function() {
        item.classList.add(class2)
      }, 100);

    } else {
      item.classList.remove(class2);
      setTimeout(function() {
        item.classList.remove(class1)
      }, 100);
    }

  }


}



checkboxToggle()
