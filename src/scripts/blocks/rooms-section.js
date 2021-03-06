import controller from '../util/ScrollMagic'
import roomSlider from '../components/room-slider'
import MetroModal from '../components/modal'
import Resposive from '../util/responsive'


const roomsScetion = () => {
  const roomsResposive = new Resposive()

  const tl2 = new TimelineMax();
  tl2.to('.o-rooms', 0.7, {
    opacity: 1,
    pointerEvents: 'auto'
  })

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-3",
    triggerHook: 0,
  }).setTween(tl2).addTo(controller);

  let tl3 = new TimelineMax()
  tl3.to('.c-room--1', 0.7, {
    width: `${window.innerWidth}px`,
    height: `${window.innerHeight}px`,
    left: 0,
    borderRadius: 0,
    ease: "power2.out",
  }).to('.c-room--1 .c-room__overlay', 0.7, {
    opacity: 0
  }, '-=0.7').to('.c-room--1 .c-room__content', 0.7, {
    top: 70,
    left: 50,
    transform: `translate(0, 0)`,
    ease: "power2.out"
  }, '-=0.7').to('.c-room--1 .c-room__sub', 0.7, {
    opacity: 1,
    ease: "power2.out"
  }, '-=0.7').to('.o-rooms', 0.5, {
    background: '#FEFEFF'
  }).to('.c-room', 0, {
    display: 'block'
  }, '-=0.5')

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-4",
    triggerHook: 0,
  }).setTween(tl3).addTo(controller);

  roomsResposive.breakpointDown('lg', () => {
    tl3 = new TimelineMax()
    tl3.to('.c-room--1', 0.7, {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      left: 0,
      top: 0,
      borderRadius: 0,
      transform: 'translate(-50%)',
      ease: "power2.out",
    }).to('.c-room--1 .c-room__overlay', 0.7, {
      opacity: 0
    }, '-=0.7').to('.c-room--1 .c-room__content', 0.7, {
      top: 70,
      left: 50,
      transform: `translate(0, 0)`,
      ease: "power2.out"
    }, '-=0.7').to('.c-room--1 .c-room__sub', 0.7, {
      opacity: 1,
      ease: "power2.out"
    }, '-=0.7').to('.o-rooms', 0.5, {
      background: '#FEFEFF'
    }).to('.c-room', 0, {
      display: 'block'
    }, '-=0.5')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-4",
      triggerHook: 0,
    }).setTween(tl3).addTo(controller);
  })

  roomsResposive.breakpointDown('sm', () => {
    tl3 = new TimelineMax()
    tl3.to('.c-room--1', 0.7, {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight}px`,
      left: 0,
      top: 0,
      borderRadius: 0,
      ease: "power2.out",
    }).to('.c-room--1 .c-room__overlay', 0.7, {
      opacity: 0
    }, '-=0.7').to('.c-room--1 .c-room__content', 0.7, {
      top: 20,
      left: 20,
      transform: `translate(0, 0)`,
      ease: "power2.out"
    }, '-=0.7').to('.c-room--1 .c-room__sub', 0.7, {
      opacity: 1,
      ease: "power2.out"
    }, '-=0.7').to('.o-rooms', 0.5, {
      background: '#FEFEFF'
    }).to('.c-room', 0, {
      display: 'block'
    }, '-=0.5')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-4",
      triggerHook: 0,
    }).setTween(tl3).addTo(controller);
  })



  let tl4 = new TimelineMax();

  tl4.to('.c-room--1 .c-room__content', 1, {
    width: 0
  }).to('.c-room--1', 0.7, {
    width: '960px',
    height: '560px',
    left: 400,
    ease: "power2.out"
  }).to('.c-room--1 .c-room__overlay', 0.7, {
    opacity: 0.2
  }, '-=0.7').to('.c-room__title--fixed', 0.7, {
    opacity: 1
  }, '-=0.7')

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-5",
    triggerHook: 0,
  }).setTween(tl4).addTo(controller);


  roomsResposive.breakpointDown('lg', () => {
    tl4 = new TimelineMax();

    tl4.to('.c-room--1 .c-room__content', 1, {
      width: 0
    }).to('.c-room--1', 0.7, {
      width: '560px',
      height: '360px',
      left: 400,
      top: 270,
      ease: "power2.out"
    }).to('.c-room--1 .c-room__overlay', 0.7, {
      opacity: 0.2
    }, '-=0.7').to('.c-room__title--fixed', 0.7, {
      opacity: 1
    }, '-=0.7')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-5",
      triggerHook: 0,
    }).setTween(tl4).addTo(controller);
  })


  roomsResposive.breakpointDown('sm', () => {
    tl4 = new TimelineMax();

    tl4.to('.c-room--1 .c-room__content', 1, {
      width: 0
    }).to('.c-room--1', 0.7, {
      width: '340px',
      height: '230px',
      left: 400,
      top: 270,
      ease: "power2.out"
    }).to('.c-room--1 .c-room__overlay', 0.7, {
      opacity: 0.2
    }, '-=0.7').to('.c-room__title--fixed', 0.7, {
      opacity: 1
    }, '-=0.7')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-5",
      triggerHook: 0,
    }).setTween(tl4).addTo(controller);
  })



  const scene4 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-5",
    triggerHook: 0,
  }).setTween(tl4).addTo(controller);


  TweenLite.defaultEase = Linear.easeNone;


  const tl5 = new TimelineMax();

  roomsResposive.breakpointUp('xl', () => {
    tl5.to('.o-rooms__wrapper', 1, {
      transform: 'translateX(-10%)',
    }, "label1").to(".o-rooms__wrapper", 1, {
      transform: 'translateX(-20%)'
    }, "label2").to(".o-rooms__wrapper", 1, {
      transform: 'translateX(-30%)'
    }, "label3")

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-6",
      triggerHook: "onLeave",
      duration: "400%"
    }).setPin(".o-rooms__container").setTween(tl5).addTo(controller);
  })

  roomsResposive.breakpointDown('lg', () => {
    tl5.to('.o-rooms__wrapper', 1, {
      transform: 'translateY(-10%)',
    }, "label1").to(".o-rooms__wrapper", 1, {
      transform: 'translateY(-25%)'
    }, "label2").to(".o-rooms__wrapper", 1, {
      transform: 'translateY(-35%)'
    }, "label3")

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-6",
      triggerHook: "onLeave",
      duration: "200%"
    }).setPin(".o-rooms__container").setTween(tl5).addTo(controller);
  })








  const xLeft = () => {
    const romosWrapper = document.querySelector('.o-rooms__wrapper')
    return Number(romosWrapper.style.transform.slice(13, 17))
  }

  const xRight = () => {
    const romosWrapper = document.querySelector('.o-rooms__wrapper')
    return Number(romosWrapper.clientWidth) - (xLeft() + window.innerWidth)
  }

  const yTop = () => {
    const romosWrapper = document.querySelector('.o-rooms__wrapper')
    return Number(romosWrapper.style.transform.slice(18, 25))
  }

  const yBottom = () => {
    const romosWrapper = document.querySelector('.o-rooms__wrapper')
    return Number(romosWrapper.clientHeight) - (yTop() + window.innerHeight)
  }

  const rooms = document.querySelectorAll('.c-room')

  rooms.forEach((room, i) => {
    const overlays = room.querySelectorAll('.c-room__overlay')

    overlays.forEach(overlay => {
      overlay.addEventListener('click', () => {
        room.classList.add('is-open')

        const nipa = room.querySelector('.c-room__close')
        const roomTitle = room.querySelector('.c-room__title')
        const priceWrap = room.querySelector(
          '.c-room__price-wrap')
        const sidebar = room.querySelector('.c-room__sidebar')

        const slideImages = new roomSlider(room)
        slideImages.start()

        const tl6 = new TimelineMax();


        roomsResposive.breakpointUp('xl', () => {
          const setRoomHeight = window.innerHeight - 50
          const setRoomWidth = window.innerWidth

          tl6.to(room, 0, {
            zIndex: 5
          }).to(room, 0.7, {
            left: `${xLeft()}px`,
            right: `${ xRight()}px`,
            width: `${setRoomWidth}px`,
            height: `${setRoomHeight}px`,
            ease: "circ.out"
          }).to(roomTitle, 0.7, {
            top: 124,
            left: 38,
            fontSize: '72px',
            transform: 'translate(0,-50%)',
            ease: "circ.out"
          }, '-=0.7').to(priceWrap, 0.7, {
            bottom: 110,
            left: 40,
            ease: "circ.out"
          }, '-=0.7').to(sidebar, 0.7, {
            width: 367
          }).to(overlay, 0.7, {
            opacity: 0,
            pointerEvents: 'none',
            ease: "circ.out"
          }, '-=01').to('.c-room__dots', 0.7, {
            opacity: 1,
            pointerEvents: 'auto'
          }, '-=0.7')
        })

        roomsResposive.breakpointDown('lg', () => {
          const setRoomHeight = window.innerHeight - 50
          const setRoomWidth = window.innerWidth


          tl6.to('.is-open .c-room__overlay', 0, {
            opacity: 0
          }).to(room, 0, {
            zIndex: 5
          }).to(room, 0.5, {
            top: `${yTop()}px`,
            bottom: `${yBottom()}px`,
            width: `${setRoomWidth}px`,
            height: `${setRoomHeight}px`,
            ease: "circ.out"
          }).to('.is-open .c-room__bg', 0, {
            top: `80%`,
            height: `${setRoomHeight / 2.5}px`,
            width: `${setRoomWidth}px`,
            ease: "circ.out"
          }, '-=0.5').to(roomTitle, 0.5, {
            top: '40px',
            left: '20px',
            width: 0,
            ease: "circ.out"
          }, '-=0.4').to('.is-open .c-room__price-wrap',
            0.4, {
              bottom: '41vh',
              ease: "circ.out"
            }, '-=0.6').to(
            '.is-open .c-room__sidebar-container', 0.4, {
              margin: 0,
              opacity: 1,
              ease: "circ.out"
            }, '-=0.1').to('.is-open .c-room__btn', 0.4, {
            bottom: '30px',
            ease: "circ.out"
          }, '-=0.4').to('.is-open .c-room__sidebar', 0.2, {
            display: 'block'
          }, '-=0.4').to('.c-room__dots', 0.4, {
            opacity: 1,
            pointerEvents: 'auto'
          }, '-=0.2')


        })



        function stopAll() {
          tl6.reverse()
          slideImages.stop()
          rooms.forEach((room, i) => {
            room.classList.remove('is-open')
          })
        }

        nipa.addEventListener('click', () => {
          stopAll()
        })

        window.addEventListener('scroll', () => {
          stopAll()
        })

      })
    })

  })

  const roomModal = new MetroModal('.o-modal', {
    openBtn: '.c-room__btn',
    closeBtn: '.o-modal__close--2',
    roomTypeInputElm: '.o-enquire__input--room-type'
  })
}


export default roomsScetion
