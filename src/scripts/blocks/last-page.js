import controller from '../util/ScrollMagic'

const lastPage = () => {
    const tl17 = new TimelineMax();
    tl17.to('.o-community', 1, {
      transform: 'translateY(-100%)',
      ease: "circ.out",
    })

    const scene17 = new ScrollMagic.Scene({
        triggerElement: "#o-stage-17",
        triggerHook: 0,
      }).setTween(tl17).addTo(controller);
}

export default lastPage