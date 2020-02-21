const disableScrolling = () => {
  const x = window.scrollX;
  const y = window.scrollY;
  window.onscroll = ()=> {
    window.scrollTo(x, y);
  };
}

const enableScrolling = () => {
  window.onscroll = () => {};
}


export default {disableScrolling, enableScrolling}