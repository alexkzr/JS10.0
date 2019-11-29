const toggleMenu = () => {
  const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu'),
    closeBtn = document.querySelector('.close-btn'),
    body = document.querySelector('body'),
    html = document.querySelector('html');
  let menuItem = document.querySelectorAll('meny > ul > li');
  html.cssText = `scroll-behavior: smooth;`;
  html.style.scrollBehavior = 'smooth';

  body.addEventListener('click', e => {
    let target = e.target,
      parent = target.parentNode;
    if (parent.matches('.menu') ||
      target.matches('.close-btn') /*||
      target.tagName === 'MENU'*/) {
      menu.classList.toggle('active-menu');
    } else if (parent.tagName === 'LI' && parent.parentNode.parentNode.tagName === 'MENU') {
      menu.classList.toggle('active-menu');
      let scrollTo;
      menuItem.forEach((item) => menuItem.addEventListener('click', () => {
        let link = item.firstChild.href.match(/\#.+/ig);
        scrollTo = document.querySelector(`${link[0]}`);
        scrollTo.scrollIntoView({ block: "center", behavior: "smooth" });
      }));
    }
  });

};

export default toggleMenu;