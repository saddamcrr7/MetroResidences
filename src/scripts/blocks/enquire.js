import MetroModal from '../components/modal'

const enquire = () => {
  $('.o-last-page .o-enquire__input--date').daterangepicker({
    autoApply: true
  });

  $('.o-modal .o-enquire__input--date').daterangepicker({
    autoApply: true
  });

  const roomInputs = document.querySelectorAll('.o-enquire__input--room-type')
  if (roomInputs) {
    roomInputs.forEach((roomInput, i) => {

      const inputDropdown = document.querySelectorAll(
        '.c-input__dropdown')

      if (inputDropdown) {
        let blurEvent = 1
        const inputDropdownItems = inputDropdown[i].querySelectorAll(
          '.c-input__dropdown-item')

        roomInput.addEventListener('focus', () => {
          inputDropdown[i].classList.add('is-active')
        })

        inputDropdownItems.forEach(inputDropdownItem => {
          inputDropdownItem.addEventListener('click', () => {
            inputDropdown[i].classList.remove('is-active')
            roomInput.value = inputDropdownItem.dataset.value
          })
        })

        inputDropdown[i].addEventListener('mouseenter', () => {
          blurEvent = 0

        })

        inputDropdown[i].addEventListener('mouseleave', () => {
          blurEvent = 1
        })

        roomInput.addEventListener('blur', () => {
          if (blurEvent)
            inputDropdown[i].classList.remove('is-active')
        })
      }
    })
  }

  const enquireModal = new MetroModal('.o-modal', {
    openBtn: '.c-contact-btn',
    closeBtn: '.o-modal__close--1',
  })

  const submitBtn = document.querySelector('.o-modal .o-enquire__form-submit')
  submitBtn.addEventListener('click', () => enquireModal.close())
}

export default enquire
