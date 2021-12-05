import Carousel from './Carousel';
import './carousel.scss';

const carouselElements = document.querySelectorAll('.js-carousel');
carouselElements.forEach((element) => new Carousel(element));
