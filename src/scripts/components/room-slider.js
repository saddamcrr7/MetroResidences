export default class roomSlider {

  constructor(room) {
    this.index = 0;
    this.sliderImages = room.querySelectorAll('.c-room__bg')
    this.sliderDots = room.querySelectorAll('.c-room__dot')
    this.timer
    this.init()
  }

  logError() {
    if (this.sliderImages.length !== this.sliderDots.length) {
      console.error(`slider images and slider dots length dosn't match`)
    }
  }

  ctrlIndex() {
    this.index += 1

    if (this.index == this.sliderImages.length) {
      this.index = 0
    }
  }

  removeActiveClass() {
    this.sliderImages.forEach((sliderImage, i) => {
      sliderImage.classList.remove('is-active')
      this.sliderDots[i].classList.remove('is-active')
    });
  }

  slide() {
    this.removeActiveClass()
    this.sliderImages[this.index].classList.add('is-active')
    this.sliderDots[this.index].classList.add('is-active')
    this.ctrlIndex()
  }

  clickToSlide() {
    this.sliderDots.forEach((sliderDot, i) => {
      sliderDot.addEventListener('click', () => {
        this.index = i
        this.removeActiveClass()
        sliderDot.classList.add('is-active')
        this.sliderImages[i].classList.add('is-active')
      })
    })
  }

  autoSlide() {
    this.timer = setInterval(() => {
      this.slide()
    }, 10000)
  }

  start() {
    this.slide()
    this.autoSlide()
    this.clickToSlide()
  }

  stop() {
    clearInterval(this.timer)
  }

  init() {
    this.logError()
  }
}
