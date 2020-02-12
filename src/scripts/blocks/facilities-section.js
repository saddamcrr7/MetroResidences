import controller from '../util/ScrollMagic'
import facilitiesTab from '../components/facilities-tab'

const facilitiesSection = () => {
  new facilitiesTab('.o-facilities__nav-item', '.o-facilities__image')

  const tl7 = new TimelineMax();
  tl7.to('.o-facilities', 1, {
    opacity: 1,
    pointerEvents: 'auto'
  })

  const scene7 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-7",
    triggerHook: 0,
  }).setTween(tl7).addTo(controller);


  const tl8 = new TimelineMax();
  tl8.to('.o-facilities__hero', 1, {
    width: '100%',
    height: '100%',
    ease: "power2.out",
  }).to('.o-facilities__content', 1, {
    top: 40,
    left: 40,
    transform: `translate(0, 0)`,
    ease: "power2.out"
  }, '-=1').to('.o-facilities__sub', 1, {
    opacity: 1,
    ease: "power2.out"
  }, '-=1')

  const scene8 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-8",
    triggerHook: 0,
  }).setTween(tl8).addTo(controller);



  const tl9 = new TimelineMax();

  tl9.to('.o-facilities__list', 0.5, {
    opacity: 1,
    pointerEvents: 'auto'
  }).to('.o-facilities__nav', 1, {
    top: 0,
    left: 0
  }, '-=0.3').to('.o-facilities__image-contrainer', 1, {
    bottom: 0,
    right: 0
  }, '-=1')


  const scene9 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-9",
    triggerHook: 0,
  }).setTween(tl9).addTo(controller);


}

export default facilitiesSection
