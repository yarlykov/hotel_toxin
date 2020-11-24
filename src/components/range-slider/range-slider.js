import 'jquery-ui-slider/jquery-ui';
import 'jquery-ui-slider/jquery-ui.css';

$(() => {
  $('.range-slider__scale').slider({
    range: true,
    min: 0,
    max: 15000,
    step: 100,
    values: [5000, 10000],
    slide(event, ui) {
      const startValue = `${ui.values[0].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      const endValue = `${ui.values[1].toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
      $('.range-slider').val(`${startValue} - ${endValue}`);
    },
  });

  const startValue = `${$('.range-slider__scale').slider('values', 0).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;
  const endValue = `${$('.range-slider__scale').slider('values', 1).toLocaleString('ru-RU', { minimumFractionDigits: 0 })}₽`;

  $('.range-slider').val(`${startValue} - ${endValue}`);
});
