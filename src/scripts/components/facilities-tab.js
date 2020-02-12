import hasClass from '../util/has-class'

export default class facilitiesTab {
  constructor(navItem, image) {
    this.navItems = document.querySelectorAll(navItem)
    this.images = document.querySelectorAll(image)
    this.init()
  }

  activeImage(navItem) {
    if (hasClass(navItem, 'is-active')) {
      this.images.forEach(image => {
        if (navItem.dataset.target == image.dataset.id) {
          image.classList.add('is-active')
        }else {
            image.classList.remove('is-active')
        }
      })
    }
  }

  removeActiveClass() {
    this.navItems.forEach(navItem => {
      navItem.classList.remove('is-active')
    })
  }

  clickToNavItem() {
    this.navItems.forEach(navItem => {
      navItem.addEventListener('click', () => {
        this.removeActiveClass()
        navItem.classList.add('is-active')
        this.activeImage(navItem)
      })
    })
  }

  onload() {
    this.navItems.forEach((item) => {
      this.activeImage(item)
    })
  }

  init() {
    this.clickToNavItem()
    this.onload()
  }
}
