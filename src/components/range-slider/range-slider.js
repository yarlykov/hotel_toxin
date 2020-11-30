import 'jquery-ui-slider/jquery-ui';
import 'jquery-ui-slider/jquery-ui.css';

$(() => {
  const rangeSlider = $('.js-range-slider');
  const scaleRangeSlider = $('.js-range-slider__scale');

  scaleRangeSlider.slider({
    range: true,
    min: 0,
    max: 15000,
    step: 100,
    values: [5000, 10000],
    slide(event, ui) {
      const startValue = `${ui.values[0].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      const endValue = `${ui.values[1].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      rangeSlider.val(`${startValue} - ${endValue}`);
    },
  });

  const startValue = `${scaleRangeSlider.slider('values', 0).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
  const endValue = `${scaleRangeSlider.slider('values', 1).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;

  rangeSlider.val(`${startValue} - ${endValue}`);
});
