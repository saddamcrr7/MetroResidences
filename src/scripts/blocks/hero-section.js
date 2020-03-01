import controller from '../util/ScrollMagic'

const heroSection = () => {
  const heroLoad = () => {
    TweenMax.to(".o-hero__container", 0.7, {
      height: `100%`,
      ease: "circ.out",
    })
    TweenMax.to(".o-hero__banner", 0.7, {
      top: '-900px',
      left: '-2600px',
      transform: `scale(1.4)`,
      ease: "circ.out",
    })
  }

  heroLoad()

  const tl = new TimelineMax();
  tl.staggerFrom(".o-hero__title", 1, {
      opacity: 0,
    })
    .to(".o-hero__banner", 0.7, {
      top: '-400px',
      left: '-1600px',
      ease: "circ.out",
    }, '-=1').to('.o-hero__overlay', 0.7, {
      opacity: 0.5,
      ease: "circ.out",
    }, '-=0.7')

  const scene = new ScrollMagic.Scene({
    triggerElement: "#o-stage-1",
    triggerHook: 0,
  }).setTween(tl).addTo(controller);


  const tl1 = new TimelineMax();
  tl1.to(".o-hero__title", 1, {
      top: "-100%",
      ease: "circ.out",
    })
    .to(".o-hero__sub", 1, {
      top: '50%',
      ease: "circ.out",
    }, '-=1')
    .to(".o-hero__banner", 1, {
      top: '-1500px',
      left: '-1600px',
      ease: "circ.out",
    }, '-=1')

  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-2",
    triggerHook: 0,
  }).setTween(tl1).addTo(controller);

}

export default heroSection
