import controller from '../util/ScrollMagic'

const communitySction = () => {
  const tl13 = new TimelineMax();
  tl13.to('.o-location', 1, {
    transform: 'translateY(-100%)'
  }).to('.o-community', 0.5, {
    opacity: 1,
    pointerEvents: 'auto'
  }, '-=1.5').to('.o-community__intro', 1, {
    right: 0
  }).to('.o-community__image-container', 1, {
    opacity: 1
  }).to('.o-community__intro', 1, { right: '100%'}, '-=1')


  const scene13 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-13",
    triggerHook: 0,
  }).setTween(tl13).addTo(controller);
}

export default communitySction
