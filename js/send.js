let selector = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(selector);

let selector2 = document.querySelector('input[type="tel"]');

selector2.addEventListener('input', function() {
  console.log(selector2.value)


  const re = /^\d*(\.\d+)?$/

  console.log(selector2.value.match(/[0-9]/g).length)


  console.log(selector2.value.replace(/[0-9]/g, "0"));

});



let validateForms = function(selector, rules, successModal, yaGoal) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function(form) {
      let formData = new FormData(form);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
            setTimeout(function() {
              document.querySelector('.thanks__popup').classList.add('thanks__popup-active');
            }, 100);
            setTimeout(function() {
              document.querySelector('.thanks__popup').classList.remove('thanks__popup-active');
            }, 3000);
          }
        }
      }

      xhr.open('POST', 'mail.php', true);
      xhr.send(formData);

      form.reset();


    }
  });
}

validateForms('.contacts__form', { email: { required: true, email: true }, tel: { required: true } }, '.thanks-popup', 'send goal');