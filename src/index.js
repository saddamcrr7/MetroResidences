// import styles
import './styles/main.scss';

import {
  gsap,
  ScrollToPlugin
} from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

import ScrollMagic from 'scrollmagic'


gsap.to(".o-hero", {
  height: `100%`,
  duration: 1
});
gsap.to(".o-hero__banner", {
  top: '-900px',
  left: '-2500px',
  transform: `scale(1)`,
  duration: 1
})
