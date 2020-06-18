$( function() {
	$( ".range-slider__scale" ).slider({
			range: true,
      min: 0,
			max: 15000,
			step: 100,
			values: [ 5000, 10000 ],
      slide: function( event, ui ) {
				$(".range-slider").val(ui.values[0] + "₽ - " +  ui.values[1] + "₽");
      },
    });
	$(".range-slider").val( $( ".range-slider__scale" ).slider( "values", 0 ) +
		"₽ - " + $(".range-slider__scale").slider("values", 1) + "₽");
  } );