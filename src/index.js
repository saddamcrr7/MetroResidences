// import styles
import './styles/main.scss';


const heroLoad = () => {
  TweenMax.to(".o-hero__container", 1, {
    height: `100%`,
    ease: "power2.out",
  })
  TweenMax.to(".o-hero__banner", 1, {
    top: '-900px',
    left: '-2600px',
    transform: `scale(1.4)`,
    ease: "power2.out",
  })
}

heroLoad()


const controller = new ScrollMagic.Controller();

const tl = new TimelineMax();
tl.staggerFrom(".o-hero__title", 1, {
    opacity: 0,
  })
  .to(".o-hero__banner", 1, {
    top: '-400px',
    left: '-1600px'
  }, '-=1')

const tl1 = new TimelineMax();
tl1.to(".o-hero__title", 1, {
    top: "-100%",
  })
  .to(".o-hero__sub", 1, {
    top: '50%',
  }, '-=1')
  .to(".o-hero__banner", 1, {
    top: '-1500px',
    left: '-1600px'
  }, '-=1')

const tl2 = new TimelineMax();
tl2.to('.o-rooms', 1, {
  opacity: 1
})

const tl3 = new TimelineMax();
tl3.to('.c-room--1', 1, {
  height: '100%',
  width: '100%',
  borderRadius: 0,
  ease: "power2.out",
}).to('.c-room--1 .c-room__title', 1, {
  top: 60,
  left: 60,
  transform: `translate(0, 0)`,
  ease: "power2.out"
}, '-=1')

const scene = new ScrollMagic.Scene({
  triggerElement: "#o-stage-1",
  triggerHook: 0,
}).setTween(tl).addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-2",
  triggerHook: 0,
}).setTween(tl1).addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-3",
  triggerHook: 0,
}).setTween(tl2).addTo(controller);


const scene4 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-4",
  triggerHook: 0,
}).setTween(tl3).addTo(controller);
