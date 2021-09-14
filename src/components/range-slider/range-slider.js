class RangeSlider {
  constructor(selector, options) {
    this.$root = $(selector);
    this.options = options;
    this.init();
  }

  init() {
    this.$root.slider(this.options);
    this.$root.slider({
      slide: this.slide.bind(this),
    });
    this.sliderInput = document.querySelector('[data-id="slider-value"]');
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
    const startValue = `${this.$root.slider('values', 0).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
    const endValue = `${this.$root.slider('values', 1).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
    return [startValue, endValue];
  }

  setValues(startValue, endValue) {
    this.sliderInput.value = `${startValue} - ${endValue}`;
  }
}

export default RangeSlider;
