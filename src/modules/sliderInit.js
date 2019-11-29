import SliderCarousel from "./bigSlider";

const sliderInit = () => {
  const carousel = new SliderCarousel({
    main: '.companies-wrapper',
    wrap: '.companies-hor',
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

export default sliderInit;