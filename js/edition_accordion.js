const publicationBtn = document.querySelector('.edition__checkbox-title');
const publicationFormItem = document.querySelectorAll('.edition__checkbox-item');
const publicationFormInput = document.querySelectorAll('.edition__checkbox-input');
const publicationBtnArrow = document.querySelector('.edition__arrow');

const showActiveCheckbox = () => {
  publicationFormInput.forEach(el => {
    if (el.checked) {
      el.parentNode.parentNode.classList.add('edition__active')
    }
  })
}

const publicationAccordion = () => {
  publicationBtn.addEventListener('click', () => {
    publicationBtnArrow.classList.toggle('arrow__active');
    publicationFormItem.forEach(el => {
      el.classList.toggle('edition__active')
      showActiveCheckbox();
    })
  })
}

const publicationCheck = () => {
  for (let i = 0; i < publicationFormInput.length; i++) {
    const el = publicationFormInput[i];
    el.addEventListener('change', () => {
      el.parentNode.classList.toggle('edition__active');
      showActiveCheckbox();
    })
  }
  showActiveCheckbox();
}
publicationAccordion();
publicationCheck();