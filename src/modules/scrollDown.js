function scrollDown() {
  let scrollTo = document.querySelector('#service-block');
  function handleButtonClick(e) {
    e.preventDefault();
    scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
  }
}
export default scrollDown;