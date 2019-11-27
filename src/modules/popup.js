//popup
const popup = document.querySelector('.popup'),
  popupBtn = document.querySelectorAll('.popup-btn'),
  popupClose = document.querySelector('.popup-close');
popup.style.transition = 'all 0.5s';
popup.style.transform = 'translateY(-100%)';
popup.style.display = 'block';
const checkScreen = function () {
  if (window.screen.width < 768) {
    popup.style.transition = 'all 0s ease 0s';
    popup.style.transform = 'translateY(0)';
    popup.style.display = 'block';
  } else {
    popup.style.transition = 'all 0.5s';
    if (!popup.style.transform || popup.style.transform === 'translateY(-100%)') {
      popup.style.display = 'block';
      popup.style.transform = 'translateY(0)';
    } else {
      popup.style.transform = 'translateY(-100%)';

    }
  }
};
const togglePopup = function () {
  popupBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
      checkScreen();
    });
  });

  popup.addEventListener('click', e => {
    let target = e.target;

    if (target.classList.contains('popup-close')) {
      popup.style.transform = 'translateY(-100%)';

    } else {
      target = target.closest('.popup-content');
      if (!target) {
        popup.style.transform = 'translateY(-100%)';
      }
    }

  });
};

export default togglePopup;