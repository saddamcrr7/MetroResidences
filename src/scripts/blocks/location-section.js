import initMap from '../components/map'
import Transportation from '../components/transportation'
import controller from '../util/ScrollMagic'
import Resposive from '../util/responsive'


const locationSction = () => {
  const locationResposive = new Resposive();

  new Transportation('.c-transportation__wrapper', {
    triggerElement: '.c-transportation__title',
    wrapperElement: '.c-transportation__content-wrapper',
    innerElement: '.c-transportation__content'
  })

  window.initMap = initMap;

  const tl11 = new TimelineMax();

  locationResposive.breakpointUp('xl', () => {
    tl11.to('.o-location', 0.4, {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 7,
      ease: "circ.out",
    }).to('.o-location__map-container', 0.2, {
      width: 760,
      height: 760,
      ease: "circ.out",
    }, '-=0.1')
  })

  locationResposive.breakpointDown('lg', () => {
    tl11.to('.o-location', 0.4, {
      opacity: 1,
      pointerEvents: 'auto',
      zIndex: 7,
      ease: "circ.out",
    }).to('.o-location__map-container', 0.2, {
      width: 500,
      height: 500,
      ease: "circ.out",
    }, '-=0.1')
  })

  const scene11 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-11",
    triggerHook: 0,
  }).setTween(tl11).addTo(controller);


  let tl12 = new TimelineMax();

  tl12.to('.o-location__map-container', 0.7, {
      width: `${window.innerWidth}px`,
      height: `${window.innerHeight - 50}px`,
      borderRadius: 0,
      ease: "circ.out",
    }).to('.o-location__sidebar', 0.7, {
      left: 0,
      ease: "circ.out",
    }, '-=0.7')
    .to('.o-location__title', 0.7, {
      left: 50,
      top: 40,
      transform: 'translate(0, 0)',
      ease: "circ.out",
    }, '-=0.7')

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-12",
    triggerHook: 0,
  }).setTween(tl12).addTo(controller)

  locationResposive.breakpointDown('lg', () => {
    tl12 = new TimelineMax()

    tl12.to('.o-location__map-container', 0, {
      display: 'none',
      width: `${window.innerWidth}px`,
      height: 600,
      borderRadius: 0,
      top: '100%',
      left: ' 200%',
      transform: 'translate(0%, 0%)',
      clipPath: ' polygon(0 10%, 100% 0, 100% 100%, 0% 100%)'
    }).to('.o-location__sidebar', 0.5, {
      opacity: 1,
      pointerEvents: 'auto',
      transform: 'translate(0, 0)',
      ease: "circ.out",
    }).to('.o-location__title', 0.7, {
      left: 22,
      top: 28,
      transform: 'translate(0)',
      ease: "circ.out",
    }, '-=0.5').to('.o-location__map-container', 0.5, {
      display: 'block',
      top: '100%',
      left: ' 100%',
      transform: 'translate(-100%, -100%)'
    }, '-=0.7')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-12",
      triggerHook: 0,
    }).setTween(tl12).addTo(controller)
  })

  locationResposive.breakpointDown('sm', () => {
    tl12 = new TimelineMax()
    
    new ScrollMagic.Scene({
      triggerElement: "#o-stage-12",
      triggerHook: 0,
    }).setTween(tl12).addTo(controller)
  })

}

export default locationSction
