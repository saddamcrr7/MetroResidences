// import styles
import './styles/main.scss';

import { gsap, ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin); 



window.addEventListener('scroll',(e) => {
  console.log(e);
  
})