// import styles
import './styles/main.scss';


const heroLoad = () => {
  TweenMax.to(".o-hero__container", 1, {height: `100%`,ease: "power2.out",})
  TweenMax.to(".o-hero__banner", 1, {top: '-900px',left: '-2500px', transform: `scale(1)`, ease: "power2.out",})
}

heroLoad()


const controller = new ScrollMagic.Controller();

const tl = new TimelineMax();
tl.staggerFrom(".o-hero__title", 1, {opacity: 0, })
.to(".o-hero__banner", 1, {top: '-400px',left: '-1500px'}, '-=1').to(".o-hero__title", 1, {top: "-100%", })

const tl1 = new TimelineMax();
tl1.to(".o-hero__title", 1, {top: "-100%", })
.to(".o-hero__sub", 1, {top: '50%', },'-=1')
.to(".o-hero__banner", 1, {top: '-3000px',left: '-1500px'}, '-=1')

const scene = new ScrollMagic.Scene({
  triggerElement: "#stage-1",
  triggerHook: 0,
  duration: "50%",

}).setTween(tl).addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#stage-2",
  triggerHook: 0,
  duration: "20%",

}).setTween(tl1).addTo(controller);