import controller from '../util/ScrollMagic'

const securitySection = () => {
  const tl10 = new TimelineMax();
  tl10.to('.o-facilities', 1, {
      transform: 'translateY(-100%)'
    }).from('.o-security__title', 0.7, {
      transform: 'translateY(-70px)'
    }, '-=0.5')
    .from('.o-security__sub', 0.7, {
      transform: 'translateY(200px)',
      opacity: 0
    }, '-=1')

  const scene10 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-10",
    triggerHook: 0,
  }).setTween(tl10).addTo(controller);
}

export default securitySection
