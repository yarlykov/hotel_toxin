import 'slick-carousel/slick/slick';

class Carousel {
  constructor(selector) {
    this.$carousel = $(selector);
    const { options } = selector.dataset;

    try {
      this.options = JSON.parse(options);
      this.init();
    } catch (e) {
      throw new Error('Incorrect options passed to the Carousel class', e);
    }
  }

  init() {
    this.$carousel.slick(this.options);
  }
}

export default Carousel;
