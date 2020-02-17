const enquire = () => {
  $('.o-enquire__input--date').daterangepicker({
    autoApply: true
  });

  const roomInput = document.querySelector('.o-enquire__input--room-type')
  if (roomInput) {

    // input dropDown
    const inputDropdown = document.querySelector('.c-input__dropdown')

    if (inputDropdown) {
      let blurEvent = 1
      const inputDropdownItems = inputDropdown.querySelectorAll(
        '.c-input__dropdown-item')

      roomInput.addEventListener('focus', () => {
        inputDropdown.classList.add('is-active')
      })

      inputDropdownItems.forEach(inputDropdownItem => {
        inputDropdownItem.addEventListener('click', () => {
          inputDropdown.classList.remove('is-active')
          roomInput.value = inputDropdownItem.dataset.value
        })
      })

      inputDropdown.addEventListener('mouseenter', () => {
        blurEvent = 0

      })

      inputDropdown.addEventListener('mouseleave', () => {
        blurEvent = 1
      })

      roomInput.addEventListener('blur', () => {
          if(blurEvent) 
            inputDropdown.classList.remove('is-active')
      })



    }


  }

}

export default enquire
