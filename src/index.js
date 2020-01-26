// import styles
import './styles/main.scss';

import {
  gsap,
  ScrollToPlugin,
  TweenMax, TimelineMax,
} from "gsap/all";
gsap.registerPlugin(ScrollToPlugin,TimelineMax, TweenMax);

import ScrollMagic from 'scrollmagic'

const heroLoad = () => {
  const tl = gsap.timeline()

  tl.to(".o-hero__container", {
    height: `100%`,
    duration: 1,
    ease: "power2.out",
  }).to(".o-hero__title", {duration:0.5, opacity: 1,});

  gsap.to(".o-hero__banner", {
    top: '-900px',
    left: '-2500px',
    transform: `scale(1)`,
    duration: 1,
    ease: "power2.out",
  })
}

heroLoad()

var controller = new ScrollMagic.Controller();
