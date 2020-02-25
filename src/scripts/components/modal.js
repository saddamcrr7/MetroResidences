class MetroModal {
  constructor(elm, options) {
    this.defaults = {
      openBtn: 'DOM',
      closeBtn: 'DOM',
      roomTypeInputElm: 'DOM',
      roomType: ''
    }
    this.isActive = 0
    this.elm = document.querySelector(elm)
    this.options = {}

    for (let prop in this.defaults) {
      this.options[prop] = this.defaults[prop]
    }

    for (let prop in options) {
      this.options[prop] = options[prop]
    }

    this.roomTypeInput = document.querySelector(this.options.roomTypeInputElm)

    this.init()
  }

  toggle() {
    if (this.isActive) {
      this.elm.classList.remove('is-active')
    } else {
      this.elm.classList.add('is-active')
    }
  }

  getRoomType(getElm) {
    this.options.roomType = getElm.dataset.roomtype
  }

  addRoomType() {
    this.roomTypeInput.dataset.value = this.options.roomType 
    console.log(this.roomTypeInput.value);

  }

  removeRoomType() {
    this.roomTypeInput.value = ''
  }

  open() {
    this.toggle()
    this.isActive = !0

    this.addRoomType()

  }

  close() {
    this.toggle()
    this.isActive = 0
  }

  init() {
    const closeBtns = document.querySelectorAll(this.options.closeBtn)

    const openBtns = document.querySelectorAll(this.options.openBtn)
    openBtns.forEach(openBtn => {
      openBtn.addEventListener('click', () => {
    this.getRoomType(openBtn)

        this.open()

        

        closeBtns.forEach(closeBtn => {
          closeBtn.style.width = '34px'
        })
      })
    })

    closeBtns.forEach(closeBtn => {
      closeBtn.addEventListener('click', () => {
        closeBtn.style.width = '0'
        this.close()
      })
    })


    
  }
}


export default MetroModal
