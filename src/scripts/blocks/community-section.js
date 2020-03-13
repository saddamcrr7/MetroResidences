import controller from '../util/ScrollMagic'
import Resposive from '../util/responsive'


const communitySction = () => {
  const communityResposive = new Resposive()

  const tl13 = new TimelineMax();
  tl13.to('.o-location', 1, {
    transform: 'translateY(-100%)',
    ease: "circ.out",
  }).to('.o-community', 0.5, {
    opacity: 1,
    pointerEvents: 'auto',
    ease: "circ.out",
  }, '-=1.5').to('.o-community__intro', 1, {
    right: 0,
    ease: "circ.out",
  }).to('.o-community__image-container', 1, {
    opacity: 1
  }).to('.o-community__intro', 1, {
    right: '100%',
    ease: "circ.out",
  }, '-=1')


  const scene13 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-13",
    triggerHook: 0,
  }).setTween(tl13).addTo(controller);

  let tl14 = new TimelineMax();

  tl14.to('.o-community__content', 0.5, {
    left: 80,
    top: 60,
    transform: 'translate(0, 0)',
    ease: "circ.out",
  }).to('.o-community__sub', 0.5, {
    opacity: 1,
    ease: "circ.out",
  }, '-=0.5').to('.o-community__image-container-backdrop', 1, {
    opacity: 1,
    ease: "circ.out",
  }, '-=0.5').to('.o-community__image--intro', 0.5, {
    borderRadius: 0,
    width: 900,
    height: 600,
    transform: 'translate(0, 0)',
    top: 150,
    left: 900,
    ease: "circ.out",
  }, '-=1').to('.o-community__image--left-1', 0.5, {
    opacity: 1,
    scale: 1,
    ease: "circ.out",
  }, '-=1').to('.o-community__image--middle-1', 0.5, {
    opacity: 1,
    scale: 1,
    ease: "circ.out",
  }, '-=1')

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-14",
    triggerHook: 0,
  }).setTween(tl14).addTo(controller)

  communityResposive.breakpointDown('lg', () => {
    tl14 = new TimelineMax()

    tl14.to('.o-community__content', 0.5, {
      left: 30,
      top: 40,
      transform: 'translate(0, 0)',
      ease: "circ.out",
    }).to('.o-community__sub', 0.5, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.5').to('.o-community__image-container-backdrop', 1, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.5').to('.o-community__image--intro', 0.5, {
      opacity: 0
    }, '-=1').to('.o-community__image--middle-1', 0.1, {
      opacity: 1,
      ease: "circ.out",
    }, '-=1').to('.o-community__image--clone', 0.1, {
      opacity: 1
    }, '-=1')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-14",
      triggerHook: 0,
    }).setTween(tl14).addTo(controller)
  })

  communityResposive.breakpointDown('sm', () => {
    tl14 = new TimelineMax()

    tl14.to('.o-community__content', 0.5, {
      left: 0,
      top: 0,
      transform: 'translate(0, 0)',
      ease: "circ.out",
    }).to('.o-community__sub', 0.5, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.5').to('.o-community__image-container-backdrop', 1, {
      opacity: 1,
      ease: "circ.out",
    }, '-=0.5').to('.o-community__image--intro', 0.5, {
      opacity: 0
    }, '-=1').to('.o-community__image--middle-1', 0.1, {
      opacity: 1,
      ease: "circ.out",
    }, '-=1').to('.o-community__image--clone', 0.1, {
      opacity: 1
    }, '-=1').to('.o-community__content', 0, {
      background: '#242424'
    })
    
    new ScrollMagic.Scene({
      triggerElement: "#o-stage-14",
      triggerHook: 0,
    }).setTween(tl14).addTo(controller)
  })



  const tl15 = new TimelineMax()

  communityResposive.breakpointUp('xl', () => {
    tl15.to('.o-community__image--left-1', 1, {
      filter: 'blur(2px)',
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }).to('.o-community__image--middle-1', 1, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--right-1', 1, {
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--left-2', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-2', 1.5, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-3', 1, {
      transform: 'translateY(0px)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-community__image--right-2', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-last-page', 0, {
      display: 'block'
    })
  })

  communityResposive.breakpointDown('lg', () => {
    tl15.to('.o-community__image--middle-1', 1, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--right-1', 1, {
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-2', 1.5, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-3', 1, {
      transform: 'translateY(0px)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-community__image--right-2', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-last-page', 0, {
      display: 'block'
    })
  })


  const scene15 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-15",
    triggerHook: 0,
  }).setTween(tl15).addTo(controller);

  const tl16 = new TimelineMax();




  communityResposive.breakpointUp('xl', () => {
    tl16.to('.o-community__image--left-2', 1, {
      filter: 'blur(3px)',
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }).to('.o-community__image--middle-3', 1, {
      filter: 'blur(5px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--right-2', 1, {
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--left-3', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-4', 1.5, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-5', 1, {
      transform: 'translateY(0px)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-community__image--right-3', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5')
  })

  communityResposive.breakpointDown('lg', () => {
    tl16.to('.o-community__image--middle-3', 1, {
      filter: 'blur(5px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--right-2', 1, {
      transform: 'translateY(-800px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-4', 1.5, {
      filter: 'blur(2px)',
      transform: 'translateY(-1500px)',
      ease: "circ.out",
    }, '-=1').to('.o-community__image--middle-5', 1, {
      transform: 'translateY(0px)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5').to('.o-community__image--right-3', 1, {
      transform: 'translateY(0)',
      filter: 'blur(0px)',
      ease: "circ.out",
    }, '-=1.5')
  })

  const scene16 = new ScrollMagic.Scene({
    triggerElement: "#o-stage-16",
    triggerHook: 0,
  }).setTween(tl16).addTo(controller);

}

export default communitySction
