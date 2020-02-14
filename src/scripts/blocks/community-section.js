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
  }).to('.o-community__intro', 1, {
    right: '100%'
  }, '-=1')


  const scene13 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-13",
    triggerHook: 0,
  }).setTween(tl13).addTo(controller);

  const tl14 = new TimelineMax();

  tl14.to('.o-community__content', 0.5, {
    left: 80,
    top: 70,
    transform: 'translate(0, 0)'
  }).to('.o-community__sub', 0.5, {
    opacity: 1
  }, '-=0.5').to('.o-community__image-container-backdrop', 1, {
    opacity: 1
  }, '-=0.5').to('.o-community__image--intro', 0.5, {
    borderRadius: 0,
    width: 900,
    height: 600,
    transform: 'translate(0, 0)',
    top: 200,
    left: 850
  }, '-=0.8')


  const scene14 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-14",
    triggerHook: 0,
  }).setTween(tl14).addTo(controller);

}

export default communitySction
