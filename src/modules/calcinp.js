const calcinp = () => {
  let inputValue = 0;
  let calcInputs = document.querySelectorAll('.calc-block input');
  calcInputs.forEach((item) => {
    item.addEventListener('keydown', function (e) {
      let key = e.keyCode ? e.keyCode : e.which;

      if (!([8, 9, 13, 27, 46, 110, 190].indexOf(key) !== -1 ||
        (key == 65 && (e.ctrlKey || e.metaKey)) ||
        (key >= 35 && key <= 40) ||
        (key >= 48 && key <= 57 && !(e.shiftKey || e.altKey)) ||
        (key >= 96 && key <= 105)
      )) { e.preventDefault(); }
    });
  });
}

export default calcinp;