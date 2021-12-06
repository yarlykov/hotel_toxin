class RangeSlider {
  constructor(selector) {
    this.root = selector;

    this.init();
  }

  init() {
    const slider = this.root.querySelector('.js-range-slider__scale');
    this.$slider = $(slider);

    try {
      this.options = JSON.parse(slider.dataset.options);
    } catch (e) {
      this.options = {};
      throw new Error('Incorrect options passed to the RangeSlider class', e);
    }

    this.$slider.slider(this.options);
    this.$slider.slider({
      slide: this.slide.bind(this),
    });
    this.sliderInput = document.querySelector('.js-range-slider__value');
    const values = this.getValues();
    const [startValue, endValue] = values;
    this.setValues(startValue, endValue);
  }

  slide(event, ui) {
    if (event.type === 'slide') {
      const startValue = `${ui.values[0].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      const endValue = `${ui.values[1].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      this.setValues(startValue, endValue);
    }
  }

  getValues() {
    const startValue = `${this.$slider.slider('values', 0).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
    const endValue = `${this.$slider.slider('values', 1).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
    return [startValue, endValue];
  }

  setValues(startValue, endValue) {
    this.sliderInput.value = `${startValue} - ${endValue}`;
  }
}

export default RangeSlider;
