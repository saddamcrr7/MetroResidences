import controller from '../util/ScrollMagic'
import Resposive from '../util/responsive'



const heroSection = () => {
  const heroResposive = new Resposive()

  heroResposive.breakpointDown('lg', () => {

  })

  const heroLoad = () => {
    TweenMax.to(".o-hero__container", 0.7, {
      height: `100%`,
      ease: "circ.out",
    })


    heroResposive.breakpointUp('xl', () => {
      TweenMax.to(".o-hero__banner", 0.7, {
        top: '-900px',
        left: '-2600px',
        transform: `scale(1.4)`,
        ease: "circ.out",
      })
    })

    heroResposive.breakpointDown('lg', () => {
      TweenMax.to(".o-hero__banner", 0.7, {
        top: '-900px',
        left: '-1247px',
        transform: `scale(1.5)`,
        ease: "circ.out",
      })
    })

    heroResposive.breakpointDown('sm', () => {
      TweenMax.to(".o-hero__banner", 0.7, {
        left: '-947px',
        top: '-659px',
        transform: `scale(1.35)`,
        ease: "circ.out",
      })
    })


  }

  heroLoad()

  let tl = new TimelineMax();

  tl.from(".o-hero__title", 1, {
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

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-1",
    triggerHook: 0,
  }).setTween(tl).addTo(controller);



  heroResposive.breakpointDown('lg', () => {
    tl = new TimelineMax()

    tl.to(".o-hero__title", 0.7, {
        opacity: 1,
        top: '50%'
      })
      .to(".o-hero__banner", 0.7, {
        top: '-400px',
        left: '-950px',
        ease: "circ.out",
      }, '-=0.7').to('.o-hero__overlay', 0.7, {
        opacity: 0.5,
        ease: "circ.out",
      }, '-=0.7')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-1",
      triggerHook: 0,
    }).setTween(tl).addTo(controller)
  })

  heroResposive.breakpointDown('sm', () => {
    tl = new TimelineMax()

    tl.to(".o-hero__title", 0.7, {
        opacity: 1,
        top: '50%'
      })
      .to(".o-hero__banner", 0.7, {
        top: '-200px',
        left: '-327px',
        ease: "circ.out",
      }, '-=0.7').to('.o-hero__overlay', 0.7, {
        opacity: 0.5,
        ease: "circ.out",
      }, '-=0.7')

    new ScrollMagic.Scene({
      triggerElement: "#o-stage-1",
      triggerHook: 0,
    }).setTween(tl).addTo(controller)
  })



  let tl1 = new TimelineMax();

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

  new ScrollMagic.Scene({
    triggerElement: "#o-stage-2",
    triggerHook: 0,
  }).setTween(tl1).addTo(controller);

  heroResposive.breakpointDown('lg', () => {
    tl1 = new TimelineMax()

    tl1.to(".o-hero__title", 0.7, {
        top: "-10%",
        ease: "circ.out",
      })
      .to(".o-hero__sub", 0.7, {
        top: '50%',
        ease: "circ.out",
      }, '-=0.7')
      .to(".o-hero__banner", 0.7, {
        top: '-800px',
        left: '-950px',
        bottom: 'auto',
        ease: "circ.out",
      }, '-=0.7')

      new ScrollMagic.Scene({
        triggerElement: "#o-stage-2",
        triggerHook: 0,
      }).setTween(tl1).addTo(controller);
  })


  heroResposive.breakpointDown('sm', () => {
    tl1 = new TimelineMax()

    tl1.to(".o-hero__title", 0.7, {
        top: "-10%",
        ease: "circ.out",
      })
      .to(".o-hero__sub", 0.7, {
        top: '50%',
        ease: "circ.out",
      }, '-=0.7')
      .to(".o-hero__banner", 0.7, {
        top: '-505px',
        left: '-400px',
        bottom: '0',
        transform: 'scale(1)',
        ease: "circ.out",
      }, '-=0.7')

      new ScrollMagic.Scene({
        triggerElement: "#o-stage-2",
        triggerHook: 0,
      }).setTween(tl1).addTo(controller);
  })


}

export default heroSection
