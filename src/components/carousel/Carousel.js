import 'slick-carousel/slick/slick';

class Carousel {
  constructor(selector) {
    this.$carousel = $(selector);
    const { options } = selector.dataset;
    this.options = JSON.parse(options);

    this.init();
  }

  init() {
    this.$carousel.slick(this.options);
  }
}

export default Carousel;
