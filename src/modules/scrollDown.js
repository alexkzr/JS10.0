const scrollDownFunc = () => {
  let btn = document.querySelector('main > a');
  btn.addEventListener('click', function (e) {
    e.preventDefault();
    let scrollTo = document.querySelector('#service-block');
    scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
  });
}

export default scrollDownFunc;