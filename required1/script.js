class DomElement {
  constructor(selector, height, width, bg, fontSize, options) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    options = options || {};
    this.position = options.position;
  }
  create() {

    if (this.selector.startsWith('.')) {
      this.element = document.createElement('div');
      this.element.classList.add(this.selector.slice(1));
    }
    else if (this.selector.startsWith('#')) {
      this.element = document.createElement('p');
      this.element.id = this.selector.slice(1);
    }
    let body = document.querySelector('body');
    body.appendChild(this.element);
    body.style.position = 'relative';
    body.style.width = '100vh';
    body.style.height = '100vw';
    this.element.style.cssText = `
    height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};
    position: ${this.position};
    top: ${this.top};
    bottom: ${this.bottom};
    left: ${this.left};
    right: ${this.right};
    `;
  }
}
const cssText = new DomElement('#something', '100px', '100px', 'mediumseagreen', 23, { position: 'absolute' });
cssText.right = '10px';
cssText.left = '10px';
cssText.top = '10px';
cssText.bottom = '10px';
document.onkeydown = checkKey;

function checkKey(e) {

  e = e || window.event;

  if (e.keyCode == '38') {
    // up arrow
    let addPx = cssText.top.slice(0, -2);
    let plus = +addPx - 10;
    let result = plus.toString() + cssText.top.slice(-2);
    cssText.top = result;
    cssText.element.style.top = cssText.top;
    console.log(' cssText.element: ', cssText.element);

  }
  else if (e.keyCode == '40') {
    // down arrow
    let addPx = cssText.top.slice(0, -2);
    let plus = +addPx + 10;
    let result = plus.toString() + cssText.top.slice(-2);
    cssText.top = result;
    cssText.element.style.top = cssText.top;

  }
  else if (e.keyCode == '37') {
    // left arrow
    let addPx = cssText.left.slice(0, -2);
    let plus = +addPx - 10;
    let result = plus.toString() + cssText.left.slice(-2);
    cssText.left = result;
    cssText.element.style.left = cssText.left;


  }
  else if (e.keyCode == '39') {
    // right arrow
    let addPx = cssText.left.slice(0, -2);
    let plus = +addPx + 10;
    let result = plus.toString() + cssText.left.slice(-2);
    cssText.left = result;
    cssText.element.style.left = cssText.left;

  }

}

cssText.create();
