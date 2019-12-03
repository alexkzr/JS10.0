document.addEventListener('DOMContentLoaded', () => {
    'use strict';
    import SliderCarousel from 'slider';
    //popups
    const popupShow = () => {
        const body = document.querySelector('body'),
            giftBtn = document.getElementById('gift'),
            callback = document.getElementById('callback_form'),
            freeVisit = document.getElementById('free_visit_form'),
            clubChoice = document.querySelector('.clubs-list ul'),
            headStyle = document.createElement('style');
        document.querySelector('head').appendChild(headStyle);
        headStyle.innerHTML = `
            .d-none {
                display: none !important;
            }
            .portfolio-item-active{
                //display: flex !important;
                opacity: 1;
                -webkit-transition: opacity .5s ease;
                transition: opacity .5s ease; }
            }
            .slide{
                opacity: 0;
            }
            .wrapper {
                position: relative;
            }
            .portfolio-dots {
                position: absolute;
                bottom: 20px;
                width: 100%;
                margin: 0 auto;
                margin-top: 20px;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                z-index: 1002; }
            .portfolio-dots .dot {
                  cursor: pointer;
                  height: 2px;
                  width: 16px;
                  margin: 0 10px;
                //   border-radius: 50%;
                //   border: solid #fff;
                  display: inline-block;
                  background-color: #fff;
                  -webkit-transition: background-color, -webkit-transform 0.4s ease;
                  transition: background-color, -webkit-transform 0.4s ease;
                  transition: background-color, transform 0.4s ease;
                  transition: background-color, transform 0.4s ease, -webkit-transform 0.4s ease; }
            .portfolio-dots .dot-active {
                    background-color: #FFD11A;
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2); }
            .portfolio-dots .dot:hover {
                    // background-color: #53c6fe;
                    -webkit-transform: scale(1.2);
                    transform: scale(1.2); }
            `;
        clubChoice.classList.add('d-none');

        body.addEventListener('click', e => {
            // e.preventDefault();
            let target = e.target;

            const block = element => {
                element.style.display = 'block';
            };

            if (target.matches('.fixed-gift img')) {
                block(giftBtn);
            }
            if (target.matches('.free-visit img') || target.matches('.open-popup')) {
                block(freeVisit);
            }
            if (target.matches('.callback-btn')) {
                block(callback);

            }
            if (target.matches('.clubs-list') || target.matches('.clubs-list p') || target.matches('.clubs-list ul')) {
                e.returnValue = true;
                block(clubChoice);
                clubChoice.classList.toggle('d-none');

            }
            if (target.matches('.close_icon') || target.matches('.overlay') || target.matches('.close-btn')) {
                giftBtn.style.display = 'none';
                freeVisit.style.display = 'none';
                callback.style.display = 'none';
            }
        });


    };
    popupShow();

    //slider
    const mainSlider = (slide, wrapper, dots = true, arrows = false) => {
        let currentSlide = 0, interval;
        const createDots = () => {
            let dotsWrap = document.createElement('ul');
            dotsWrap.classList.add('portfolio-dots');

            for (let i = 0; i < slide.length; i++) {
                let dots = document.createElement('li');
                dots.classList.add('dot');
                dotsWrap.appendChild(dots);
            }
            wrapper.appendChild(dotsWrap);
        };
        if (dots) {
            createDots();
        }
        let dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            if (elem === dot) {
                elem[index].classList.remove(strClass);
            } else {
                elem[index].classList.remove(strClass);
                elem[index].style.display = 'none';
            }

        };
        const nextSlide = (elem, index, strClass) => {
            if (elem === dot) {
                elem[index].classList.add(strClass);
            } else {
                elem[index].classList.add(strClass);
                elem[index].style.display = 'flex';
            }
        };
        const autoPlaySlide = () => {
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        };
        const startSlide = (speed = 3000) => {
            interval = setInterval(autoPlaySlide, speed);
        };
        const stopSlide = () => {
            clearInterval(interval);
        };
        wrapper.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target;
            if (!target.matches('.dot')) {
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            if (arrows) {
                if (target.matches('#arrow-right')) {
                    currentSlide++;
                } else if (target.matches('#arrow-left')) {
                    currentSlide--;
                }
            }

            if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });
        wrapper.addEventListener('mouseover', e => {
            if (e.target.matches('.dot')) {
                stopSlide();
            }
        });
        wrapper.addEventListener('mouseout', e => {
            if (e.target.matches(e.target.matches('.dot'))) {
                startSlide();
            }
        });
        startSlide(2000);


    };
    const mainWrap = document.querySelector('.head-slider > .wrapper');
    let mainSlide = document.querySelectorAll('.main-slider > .slide');
    const galleryWrap = document.querySelector('.gallery-bg > .wrapper');
    let gallerySlide = document.querySelectorAll('.gallery-slider > .slide');
    console.log('gallerySlide: ', gallerySlide);
    mainSlider(mainSlide, mainWrap);
    mainSlider(gallerySlide, galleryWrap);


    const sliderInit = () => {
        const carousel = new SliderCarousel({
            main: '.services-slider',
            wrap: '#services .wrapper',
            slidesToShow: 4,
            infinity: true,

            responsive: [
                {
                    breakpoint: 1200,
                    slidesToShow: 4,
                },
                {
                    breakpoint: 1024,
                    slidesToShow: 3,

                },
                {
                    breakpoint: 768,
                    slidesToShow: 2,

                },
                {
                    breakpoint: 576,
                    slidesToShow: 1,

                }]
        });
        carousel.init();
    };
    sliderInit();
});