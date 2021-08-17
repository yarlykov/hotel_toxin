import RangeSlider from './range-slider';

const options = {
  range: true,
  min: 0,
  max: 15000,
  step: 100,
  values: [5000, 10000],
};
const rangeSliderNodes = document.querySelectorAll('.js-range-slider__scale');

if (rangeSliderNodes.length > 0) {
  rangeSliderNodes.forEach((element) => new RangeSlider(element, options));
}
