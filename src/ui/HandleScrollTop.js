const handleClickScroll = () => {
  window.scrollTo({ top: 0, left: 0 });
};
const handleClickScrollSmooth = () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

export {
  handleClickScroll as onClickScroll,
  handleClickScrollSmooth as onClickScrollSmooth,
};
