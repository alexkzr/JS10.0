class DomElement {
  constructor(selector, height, width, bg, fontSize, options) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    options = options || {};
    this.position = options.position;
    this.newDiv = document.createElement('div');
    this.newPar = document.createElement('p');
  }
  create() {

    if (this.selector.startsWith('.')) {
      this.newDiv.classList.add(this.selector.slice(1));
      let body = document.querySelector('body');
      body.appendChild(this.newDiv);
      body.style.position = 'relative';
      body.style.width = '100vh';
      body.style.height = '100vw';
      this.newDiv.style.height = this.height;
      this.newDiv.style.width = this.width;
      this.newDiv.style.background = this.bg;
      this.newDiv.style.fontSize = this.fontSize;
      this.newDiv.style.position = this.position;
      this.newDiv.style.top = this.top;
      this.newDiv.style.bottom = this.bottom;
      this.newDiv.style.left = this.left;
      this.newDiv.style.right = this.right;
    }
    else if (this.selector.startsWith('#')) {
      this.newPar.id = this.selector.slice(1);
      let body = document.querySelector('body');
      body.appendChild(this.newPar);
      body.style.position = 'relative';
      body.style.width = '100vh';
      body.style.height = '100vw';
      this.newPar.style.height = this.height;
      this.newPar.style.width = this.width;
      this.newPar.style.background = this.bg;
      this.newPar.style.fontSize = this.fontSize;
      this.newPar.style.position = this.position;
      this.newPar.style.top = this.top;
      this.newPar.style.bottom = this.bottom;
      this.newPar.style.left = this.left;
      this.newPar.style.right = this.right;
    }
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
    cssText.newPar.style.top = cssText.top;
    cssText.newDiv.style.top = cssText.top;

  }
  else if (e.keyCode == '40') {
    // down arrow
    let addPx = cssText.top.slice(0, -2);
    let plus = +addPx + 10;
    let result = plus.toString() + cssText.top.slice(-2);
    cssText.top = result;
    cssText.newPar.style.top = cssText.top;
    cssText.newDiv.style.top = cssText.top;

  }
  else if (e.keyCode == '37') {
    // left arrow
    let addPx = cssText.left.slice(0, -2);
    let plus = +addPx - 10;
    let result = plus.toString() + cssText.left.slice(-2);
    cssText.left = result;
    cssText.newPar.style.left = cssText.left;
    cssText.newDiv.style.left = cssText.left;


  }
  else if (e.keyCode == '39') {
    // right arrow
    let addPx = cssText.left.slice(0, -2);
    let plus = +addPx + 10;
    let result = plus.toString() + cssText.left.slice(-2);
    cssText.left = result;
    cssText.newPar.style.left = cssText.left;
    cssText.newDiv.style.left = cssText.left;

  }

}

cssText.create();
console.log('cssText: ', cssText);