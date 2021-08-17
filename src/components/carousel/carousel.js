import 'slick-carousel/slick/slick';

class Carousel {
  constructor(selector, options) {
    this.$carousel = $(selector);
    this.options = options;
    this.init();
  }

  init() {
    this.$carousel.slick(this.options);
  }
}

export default Carousel;
