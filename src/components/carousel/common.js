import Carousel from './carousel';

const $carouselElements = document.querySelectorAll('.js-carousel');
const options = {
  dots: true,
  zIndex: 10,
};
if ($carouselElements) new Carousel($carouselElements, options);
