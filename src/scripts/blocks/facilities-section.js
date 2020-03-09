import controller from '../util/ScrollMagic'
import facilitiesTab from '../components/facilities-tab'
import Resposive from '../util/responsive'

const facilitiesSection = () => {
  new facilitiesTab('.o-facilities__nav-item', '.o-facilities__image')

  const facilitiesResposive = new Resposive()

  facilitiesResposive.breakpointUp('xl', () => {

  })

  facilitiesResposive.breakpointDown('lg', () => {

  })


  const tl7 = new TimelineMax();
  tl7.to('.o-facilities', 1, {
    opacity: 1,
    ease: "circ.out",
    pointerEvents: 'auto'
  }).to('.o-security', 0, {display: 'block'})

  const scene7 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-7",
    triggerHook: 0,
  }).setTween(tl7).addTo(controller);


  const tl8 = new TimelineMax();


  facilitiesResposive.breakpointUp('xl', () => {
    tl8.to('.o-facilities__hero', 0.7, {
      width: '100%',
      height: '100%',
      ease: "circ.out",
    }).to('.o-facilities__content', 0.7, {
      top: 118,
      left: 376,
      ease: "circ.out",
    }, '-=0.7').to('.o-facilities__sub', 0.7, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.7')
  })

  facilitiesResposive.breakpointDown('lg', () => {
    tl8.to('.o-facilities__hero', 0.7, {
      width: '100%',
      height: '100%',
      padding: '260px 40px 40px 40px',
      ease: "circ.out",
    }).to('.o-facilities__content', 0.7, {
      top: 118,
      left: 303,
      ease: "circ.out",
    }, '-=0.7').to('.o-facilities__sub', 0.7, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.7')
  })

  const scene8 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-8",
    triggerHook: 0,
  }).setTween(tl8).addTo(controller);



  const tl9 = new TimelineMax();

  tl9.to('.o-facilities__list', 0.5, {
    opacity: 1,
    ease: "circ.out",
    pointerEvents: 'auto'
  }).to('.o-facilities__nav', 0.7, {
    top: 0,
    left: 0,
    ease: "circ.out",
  }, '-=0.5').to('.o-facilities__image-contrainer', 0.7, {
    bottom: 0,
    right: 0,
    ease: "circ.out",
  }, '-=0.7')


  const scene9 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-9",
    triggerHook: 0,
  }).setTween(tl9).addTo(controller);


}

export default facilitiesSection
