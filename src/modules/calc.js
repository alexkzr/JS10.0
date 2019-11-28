const calc = (price = 100) => {
  const calcBlock = document.querySelector('.calc-block'),
    calcType = document.querySelector('.calc-type'),
    calcSquare = document.querySelector('.calc-square'),
    calcCount = document.querySelector('.calc-count'),
    calcDay = document.querySelector('.calc-day'),
    totalValue = document.getElementById('total');
  let total = 0;



  const countSum = () => {
    let countValue = 1,
      dayValue = 1;
    let typeValue = calcType.options[calcType.selectedIndex].value;
    let squareValue = +calcSquare.value;

    if (calcCount.value > 1) {
      countValue += +(calcCount.value - 1) / 10;
    }

    if (calcDay.value && +calcDay.value < 5) {
      dayValue *= 2;
    } else if (calcDay.value && +calcDay.value < 10) {
      dayValue *= 1.5;
    }

    if (typeValue && squareValue) {
      total = price * typeValue * squareValue * countValue * dayValue;
    }


    // totalValue.textContent = total;
    if (calcSquare.value > 0) {
      return total;
    }
  };

  function animate({ timing, draw, duration }) {

    let start = performance.now();

    requestAnimationFrame(function animate(time) {
      // timeFraction изменяется от 0 до 1
      let timeFraction = (time - start) / duration;
      if (timeFraction > 1) { timeFraction = 1; }

      // вычисление текущего состояния анимации
      let progress = timing(timeFraction);

      draw(progress); // отрисовать её

      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }

    });
  }
  /*****************************\
  *  Animate numbers           *
  \*************************** */
  function animateText(textArea) {
    let text = textArea.value;
    let to = total,
      from = 0;

    animate({
      duration: 1000,
      timing: function (timeFraction) {
        return timeFraction;
      },
      // timing: bounce,
      draw: function (progress) {
        let result = Math.ceil((to - from) * progress + from);
        document.getElementById('total').textContent = result;
      }
    });
  }


  calcBlock.addEventListener('change', (e) => {
    const target = e.target;

    if (target.matches('select') || target.matches('input')) {
      countSum();
      animateText(total);
    }


  });
};

export default calc;