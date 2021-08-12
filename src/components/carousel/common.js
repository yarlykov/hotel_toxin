import Carousel from './Carousel';

const carouselElements = document.querySelectorAll('.js-carousel');
const options = {
  dots: true,
  zIndex: 10,
};

if (carouselElements.length > 0) new Carousel(carouselElements, options);
