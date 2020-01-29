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

  const scene = new ScrollMagic.Scene({
    triggerElement: "#o-stage-1",
    triggerHook: 0,
  }).setTween(tl).addTo(controller);



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

  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-2",
    triggerHook: 0,
  }).setTween(tl1).addTo(controller);
  

const tl2 = new TimelineMax();
tl2.to('.o-rooms', 1, {
  opacity: 1,
  pointerEvents: 'auto'
})

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-3",
  triggerHook: 0,
}).setTween(tl2).addTo(controller);



const tl3 = new TimelineMax();
tl3.to('.c-room--1', 1, {
  width: '100%',
  height: '100%',
  borderRadius: 0,
  ease: "power2.out",
}).to('.c-room--1 .c-room__content', 1, {
  top: 70,
  left: 50,
  transform: `translate(0, 0)`,
  ease: "power2.out"
}, '-=1').to('.c-room--1 .c-room__sub', 1, {
  opacity: 1,
  ease: "power2.out"
}, '-=1')

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-4",
  triggerHook: 0,
}).setTween(tl3).addTo(controller);



const tl4 = new TimelineMax();
tl4.to('.c-room--1', 1, { width: '790px', height: '560px', left: '50vw', transform: 'translateX(-0px) matrix(1, 0, 0, 1, 0, 2)'})

const scene4 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-5",
  triggerHook: 0,
}).setTween(tl4).addTo(controller);


TweenLite.defaultEase = Linear.easeNone;

const tl5 = new TimelineMax();
tl5.to('.o-rooms__wrapper', 1, {xPercent: -10}, "label1").to(".o-rooms__wrapper", 1, {xPercent: -20}, "label2").to(".o-rooms__wrapper", 1, {xPercent: -30}, "label3");;

const scene5 = new ScrollMagic.Scene({
  triggerElement: "#o-stage-6",
  triggerHook: "onLeave",
  duration: "100%"
}).setPin(".o-rooms__container").setTween(tl5).addTo(controller);
