import 'jquery-ui-slider/jquery-ui.js'
import 'jquery-ui-slider/jquery-ui.css'

$( function() {
  $( ".range-slider__scale" ).slider({
      range: true,
      min: 0,
      max: 15000,
      step: 100,
      values: [5000, 10000],
      slide: function( event, ui ) {
        let startValue = ui.values[0].toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });
        let endValue = ui.values[1].toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });
        $(".range-slider").val(startValue + ' - ' +  endValue);
      },
    });

    const startValue = $(".range-slider__scale").slider("values", 0).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });
    const endValue = $(".range-slider__scale").slider("values", 1).toLocaleString('ru-RU', { style: 'currency', currency: 'RUB', minimumFractionDigits: 0 });

  $(".range-slider").val( startValue + " - " + endValue);
  } );