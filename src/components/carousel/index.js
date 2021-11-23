import Carousel from './Carousel';
import './carousel.scss';

const carouselElements = document.querySelectorAll('.js-carousel');

if (carouselElements.length > 0) {
  carouselElements.forEach((element) => new Carousel(element));
}
