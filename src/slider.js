export default class SliderCarousel {
  constructor({
    main,
    wrap,
    next,
    prev,
    infinity = false,
    position = 0,
    slidesToShow = 3,
    responsive = [],
  }) {
    if (!main || !wrap) {
      console.warn('slider-carousel: необходимо 2 свойства, "main" и "wrap"');
    }
    this.main = document.querySelector(main);
    this.wrap = document.querySelector(wrap);
    this.slides = document.querySelector(wrap).children;
    this.next = document.querySelector(next);
    this.prev = document.querySelector(prev);
    this.slidesToShow = slidesToShow;
    this.options = {
      position,
      widthSlide: Math.floor(100 / this.slidesToShow),
      infinity

    };
    this.responsive = responsive;
  }

  init() {
    if (!this.main || !this.wrap) {
      console.warn('slider-carousel: необходимо 2 свойства, "main" и "wrap"')
    }
    this.addGloClass();
    this.addStyle();
    if (this.prev && this.next) {
      this.controlSlider();
    } else {
      this.addArrow();
      this.controlSlider();
    }
    if (this.responsive) {
      this.responsiveInit();
    }

  }
  addGloClass() {
    this.main.classList.add('glo-slider');
    this.wrap.classList.add('glo-slider__wrap');
    for (const item of this.slides) {
      item.classList.add('glo-slider__item');
    }
  }
  addStyle() {
    let style = document.querySelector('#sliderCarousel-style');
    if (!style) {
      style = document.createElement('style');
      style.id = 'sliderCarousel-style';
    }
    style.textContent = `
      #services{
        position: relative;
      }
      
      .glo-slider {
        position: static !important;
        overflow: hidden !important;
        padding: 0 !important;
      }
      .glo-slider__wrap{
        display: flex !important;
        transition: transform 0.5s !important;
        will-change: transform !important;
        padding: 0 !important;
      }
      .glo-slider__item{
        display: flex !important;
        flex-direction: column;
        align-items: center !important;
        justify-content: flex-start !important;
        flex: 0 0 ${this.options.widthSlide}% !important;
        margin: 0 auto !important;

      }
      .glo-slider__prev{
        position: absolute;
        top: 50%;
        transform: translateX(-50%);
        left: 5%;
        z-index: 1003;
      }
      .glo-slider__next{
        position: absolute;
        top: 50%;
        transform: translateX(-50%);
        right: 1%;
        z-index: 1003;
      }
    `;
    document.head.appendChild(style);
  }
  controlSlider() {


    this.prev.addEventListener('click', this.prevSlider.bind(this));
    this.next.addEventListener('click', this.nextSlider.bind(this));
  }

  prevSlider() {
    if (this.options.infinity || this.options.position > 0) {
      --this.options.position;
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  nextSlider() {
    if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {
      ++this.options.position;
      if (this.options.position > this.slides.length - this.slidesToShow) {
        this.options.position = 0;
      }
      this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
    }
  }
  addArrow() {
    this.prev = document.createElement('button');
    this.next = document.createElement('button');

    this.prev.className = 'glo-slider__prev';
    this.next.className = 'glo-slider__next';
    this.prev.innerHTML = '<';
    this.next.innerHTML = '>';
    this.main.appendChild(this.prev);
    this.main.appendChild(this.next);

    const style = document.createElement('style');
    style.textContent = `
      .glo-slider__prev, .glo-slider__next{
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
        outline: none;
      }
      .glo-slider__next, .glo-slider__prev{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        font-size: 30px;
        font-weight: bold;
        background-color: #FFD11A;
        line-height: 30px;
        text-align: center;
        margin: 0;
        border: none;
      }
      
      .glo-slider__prev:hover, .glo-slider__next:hover,
      .glo-slider__prev:focus, .glo-slider__next:focus{
        outline: transparent !important;
      }
    `;
    document.head.appendChild(style);
  }
  responsiveInit() {
    const slidesToShowDefault = this.slidesToShow;
    const alLResponsive = this.responsive.map(item => item.breakpoint);
    const maxResponsive = Math.max(...alLResponsive);

    const checkResponsive = () => {
      const widthWindow = document.documentElement.clientWidth;
      if (widthWindow < maxResponsive) {
        for (let i = 0; i < alLResponsive.length; i++) {
          if (widthWindow < alLResponsive[i]) {
            this.slidesToShow = this.responsive[i].slidesToShow;
            this.options.widthSlide = Math.floor(100 / this.slidesToShow);
            this.addStyle();
          }
        }
      } else {
        this.slidesToShow = slidesToShowDefault;
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();


      }
    };
    checkResponsive();

    window.addEventListener('resize', checkResponsive);

  }
}
