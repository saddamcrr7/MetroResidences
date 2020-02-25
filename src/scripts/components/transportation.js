class Transportation {
  constructor(elm, options) {
    this.elms = document.querySelectorAll(elm)
    this.defaults = {
      triggerElement: '.c-transportation__title',
      wrapperElement: '.c-transportation__content-wrapper',
      innerElement: '.c-transportation__content'
    }
    this.options = {}

    for (let prop in this.defaults) {
      this.options[prop] = this.defaults[prop]
    }

    for (let prop in options) {
      this.options[prop] = options[prop]
    }

    this.init()
  }

  init() {
    this.elms.forEach((elm, i) => {
        const triggerElement = elm.querySelector(this.options.triggerElement)
        const wrapperElement = elm.querySelector(this.options.wrapperElement)
        const innerElement = elm.querySelector(this.options.innerElement)
        const innerHeight = innerElement.offsetHeight
        let isOpen = !0

        if(i == 0) {
            isOpen = 0
            wrapperElement.style.height = `${innerHeight}px`
        }

        triggerElement.addEventListener('click',()=> {

            this.elms.forEach(relm => {
                relm.querySelector(this.options.wrapperElement).style.height = '0px'
                isOpen = !0
                relm.classList.remove('is-active')
            })

            if (isOpen == !0) {
                isOpen = 0
                wrapperElement.style.height = `${innerHeight}px`
                elm.classList.add('is-active')
            }
        })
    })

  }
}

export default Transportation
