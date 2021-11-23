import Carousel from './Carousel';
import './carousel.scss';

const carouselElements = document.querySelectorAll('.js-carousel');

if (carouselElements) {
  carouselElements.forEach((element) => new Carousel(element));
}
