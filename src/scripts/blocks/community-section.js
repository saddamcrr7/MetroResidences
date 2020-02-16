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
    top: 60,
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
    top: 150,
    left: 900
  }, '-=0.8').to('.o-community__image--left-1', 0.5, {
    opacity: 1,
    scale: 1
  }, '-=0.5').to('.o-community__image--middle-1', 0.5, {
    opacity: 1,
    scale: 1
  }, '-=0.5')

  const scene14 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-14",
    triggerHook: 0,
  }).setTween(tl14).addTo(controller);


  const tl15 = new TimelineMax()
  tl15.to('.o-community__image--left-1', 1, {
    filter: 'blur(2px)',
    transform: 'translateY(-800px)'
  }).to('.o-community__image--middle-1', 1, {
    filter: 'blur(2px)',
    transform: 'translateY(-1500px)'
  }, '-=1').to('.o-community__image--right-1', 1, {
    transform: 'translateY(-800px)'
  }, '-=1').to('.o-community__image--left-2', 1, {
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  }, '-=1').to('.o-community__image--middle-2', 1.5, {
    filter: 'blur(2px)',
    transform: 'translateY(-1500px)'
  }, '-=1').to('.o-community__image--middle-3', 1, {
    transform: 'translateY(0px)',
    filter: 'blur(0px)',

  }, '-=1.5').to('.o-community__image--right-2', 1, {
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  }, '-=1.5').to('.o-last-page', 0,{display: 'block'})


  const scene15 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-15",
    triggerHook: 0,
  }).setTween(tl15).addTo(controller);

  const tl16 = new TimelineMax();

  tl16.to('.o-community__image--left-2', 1, {
    filter: 'blur(2px)',
    transform: 'translateY(-800px)'
  }).to('.o-community__image--middle-3', 1, {
    filter: 'blur(5px)',
    transform: 'translateY(-1500px)'
  }, '-=1').to('.o-community__image--right-2', 1, {
    transform: 'translateY(-800px)'
  }, '-=1').to('.o-community__image--left-3', 1, {
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  }, '-=1').to('.o-community__image--middle-4', 1.5, {
    filter: 'blur(2px)',
    transform: 'translateY(-1500px)'
  }, '-=1').to('.o-community__image--middle-5', 1, {
    transform: 'translateY(0px)',
    filter: 'blur(0px)',
  }, '-=1.5').to('.o-community__image--right-3', 1, {
    transform: 'translateY(0)',
    filter: 'blur(0px)',
  }, '-=1.5')

  const scene16 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-16",
    triggerHook: 0,
  }).setTween(tl16).addTo(controller);

}

export default communitySction
