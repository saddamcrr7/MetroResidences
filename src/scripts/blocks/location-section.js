import initMap from '../components/map'
import controller from '../util/ScrollMagic'

const locationSction = () => {
  window.initMap = initMap;

  const tl11 = new TimelineMax();
  tl11.to('.o-location', 0.4, {
    opacity: 1,
    pointerEvents: 'auto'
  }).to('.o-location__map-container', 0.2, {
    width: 760,
    height: 760,
    display: 'block'
  }, '-=0.1')

  const scene11 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-11",
    triggerHook: 0,
  }).setTween(tl11).addTo(controller);


  const tl12 = new TimelineMax();
  tl12.to('.o-location__map-container', 0.7, {
      width: '100%',
      height: '100%',
      borderRadius: 0
    }).to('.o-location__sidebar', 0.7, {
      left: 0
    }, '-=0.7')
    .to('.o-location__title', 0.7, {
      left: 50,
      top: 40,
      transform: 'transform: translate(0, 0);'
    }, '-=0.7')

  const scene12 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-12",
    triggerHook: 0,
  }).setTween(tl12).addTo(controller);
}

export default locationSction