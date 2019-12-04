import SliderCarousel from './slider';
document.addEventListener('DOMContentLoaded', () => {
    'use strict';
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
            .gallery-slider .slide:not(:first-child){
                display: none;
            }
            #arrow-left, #arrow-right{
        margin: 0 10px;
        border: 20px solid transparent;
        background: transparent;
        outline: none;
      }
      #arrow-right, #arrow-left{
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
    #arrow-left{
        position: absolute;
        top: 50%;
        transform: translateX(-50%);
        left: 5%;
        z-index: 1003;
      }
      #arrow-right{
        position: absolute;
        top: 50%;
        transform: translateX(-50%);
        right: 1%;
        z-index: 1003;
      }
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
    const mainSlider = (parent, slide, wrapper, dots = true, arrows = false) => {
        let currentSlide = 0, interval;
        const createDots = () => {
            let dotsWrap = document.createElement('ul');
            dotsWrap.classList.add('portfolio-dots');
            // dotsWrap.classList.add(`${slide.className}-dots`);

            for (let i = 0; i < slide.length; i++) {
                let dots = document.createElement('li');
                dots.classList.add(`${parent.className}-dot`);
                dots.classList.add('dot');
                dotsWrap.appendChild(dots);
            }
            wrapper.appendChild(dotsWrap);
        };
        createDots();
        const createArrows = () => {
            if (arrows) {
                const arrowLeft = document.createElement('button'),
                    arrowRight = document.createElement('button');
                arrowLeft.id = 'arrow-left';
                arrowRight.id = 'arrow-right';
                arrowRight.innerHTML = '>';
                arrowLeft.innerHTML = '<';
                wrapper.appendChild(arrowRight);
                wrapper.appendChild(arrowLeft);

            }
        };
        createArrows();
        let dot = document.querySelectorAll(`.${parent.className}-dot`);

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

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                console.log('arrowright triggered');
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                console.log('arrowleft triggered');
                currentSlide--;
            }

            if (target.matches(`.${parent.className}-dot`)) {
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
            if (!target.matches(`.${parent.className}-dot`) || !target.matches('#arrow-left') || !target.matches('#arrow-right')) {
                return;
            }
        });
        wrapper.addEventListener('mouseover', e => {
            if (e.target.matches(`.${parent.className}-dot`)) {
                stopSlide();
            }
        });
        wrapper.addEventListener('mouseout', e => {
            if (e.target.matches(e.target.matches(`.${parent.className}-dot`))) {
                startSlide();
            }
        });
        startSlide(2000);

        const sliderInit = () => {
            const carousel = new SliderCarousel({
                main: '#services .wrapper',
                wrap: '.services-slider',
                slidesToShow: 5,
                infinity: true,

                responsive: [
                    {
                        breakpoint: 1200,
                        slidesToShow: 5,
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

    };
    const mainWrap = document.querySelector('.head-slider > .wrapper');
    const mainParent = document.querySelector('.head-slider');
    let mainSlide = document.querySelectorAll('.main-slider > .slide');
    const galleryParent = document.querySelector('.gallery-bg');
    const galleryWrap = document.querySelector('.gallery-bg > .wrapper');
    let gallerySlide = document.querySelectorAll('.gallery-slider > .slide');

    mainSlider(mainParent, mainSlide, mainWrap, true, false);
    mainSlider(galleryParent, gallerySlide, galleryWrap, true, true);

    //card calculator

    /*sendall*/
    const sendForm = () => {

        const statusMessage = document.createElement('div');
        const preloaderDiv = document.createElement('div');
        preloaderDiv.id = 'hellopreloader_preload';
        let hellopreloader = document.getElementById("hellopreloader_preload");

        const preloader = () => {
            console.log('hellopreloader: ', hellopreloader);
            console.log('preloaderDiv: ', preloaderDiv);
            preloaderDiv.style.display = "block";
            // hellopreloader.style.display = "block";

            let styleDiv = document.createElement('style');
            styleDiv.textContent = `
      #hellopreloader>p{
        display:none;
      }
      form {
        position: relative;
      }
      #hellopreloader_preload{
        display: block;
        position: absolute;
        z-index: 99999;
        top: 58%;
        left: 50%;
        transform: translateX(-50%);
        width: 100px;
        height: 100px;
        background: url(./images/pre.svg) center center no-repeat;
        background-size: 30px;
      }`;
            document.head.appendChild(styleDiv);

        };


        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            success = 'Спасибо! Мы свяжемся с вами!';
        statusMessage.style.cssText = 'font-size: 2rem;';
        statusMessage.className = 'statusMessage';



        const getData = (url, selector) => {
            const formData = new FormData(selector);
            console.log('formData: ', formData);
            selector.appendChild(statusMessage);
            statusMessage.textContent = loadMessage;
            selector.querySelectorAll('input').forEach((item) => {
                item.value = '';
                if (item.nextElementSibling) {
                    if (item.nextElementSibling.classList.contains('validator-error')) {
                        item.nextElementSibling.remove();
                    }
                }
            });
            let body = {};
            formData.forEach((val, key) => {
                body[key] = val;
            });
            return fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });
        };

        const send = (selector) => {
            // let isFalse = 0;
            // validArr.forEach((item) => {
            //     if (item.form === selector) {
            //         item.elementsForm.forEach((input) => {
            //             if (!item.isValid(input)) {
            //                 isFalse++;
            //             }
            //         });
            //     }
            // });
            // if (isFalse) return;

            // selector.appendChild(preloaderDiv);

            let urLink = "../server.php";

            getData(urLink, selector)
                .then(data => {
                    if (data.status !== 200) {
                        statusMessage.textContent = errorMessage;
                        throw new Error('status not 200');
                    }
                    statusMessage.textContent = success;
                    preloaderDiv.style.display = 'none';
                    console.log(data);
                })
                .catch(error => console.error(error));

        };
        const calcForm = document.getElementById('card_order');
        let forms = document.querySelectorAll('form');

        calcForm.addEventListener('change', e => {
            let target = e.target;
            const promo = document.querySelector('.price-message input'),
                priceDiv = document.querySelector('.price'),
                priceInput = document.createElement('input'),
                priceTotal = document.getElementById('price-total');
            let total = 1990;
            priceInput.name = 'price';
            priceInput.type = 'hidden';
            calcForm.appendChild(priceInput);
            promo.name = 'promo';

            if (target.matches('#card_leto_mozaika')) {
                console.log(target);
                total = 1990;
            } else if (target.matches('#card_leto_schelkovo')) {
                console.log(target);
                total = 2999;
            }
            if (target.matches('.price-message input').value === 'ТЕЛО2019') {
                console.log(target);
                total = total / 3;
            }

            let timeInputs = document.querySelectorAll('.time input');
            timeInputs.forEach((item) => {
                if (item.checked) {
                    total = total * +item.value;
                }
            });

            priceTotal.textContent = total;
            priceInput.value = priceTotal.textContent;
            console.log('priceInput: ', priceInput);

        });

        calcForm.addEventListener('submit', e => {
            e.preventDefault();
            send(calcForm);

        });
        forms.forEach((item) => {
            item.addEventListener('submit', e => {
                e.preventDefault();
                send(item);

            });
        });
    };
    sendForm();



});