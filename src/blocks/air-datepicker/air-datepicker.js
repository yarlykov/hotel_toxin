import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.css';

$('.air-datepicker').datepicker({
	dateFormat: 'd M',
	multipleDatesSeparator: ' - ',
	range: true,
	// inline: true,
	// clearButton: true,
	// todayButton: true,
	prevHtml: '<span class="material-icons">arrow_back</span>',
	nextHtml: '<span class="material-icons">arrow_forward</span>',
	language: {
		monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
		today: 'применить',
		clear: 'очистить',
	}
	// offset: -10,
})

const root = $('.datepicker')
const btnWrap = document.createElement('div')
const clearBtn = document.createElement('button')
const applyBtn = document.createElement('button')

btnWrap.classList.add('js-buttons-dropdown__wrapper')

clearBtn.classList.add('button_text-color_gray', 'js-buttons-dropdown__button', 'js-buttons-dropdown__button_clear', 'font__h3')
clearBtn.setAttribute('type', 'button')
clearBtn.setAttribute('data-type', 'clear')
clearBtn.innerHTML = 'Очистить'

applyBtn.classList.add('button_text-color_purple', 'js-buttons-dropdown__button', 'js-buttons-dropdown__button_apply', 'font__h3')
applyBtn.setAttribute('type', 'button')
applyBtn.setAttribute('data-type', 'apply')
applyBtn.innerHTML = 'Применить'

btnWrap.append(clearBtn)
btnWrap.append(applyBtn)
root.append(btnWrap)

const apply = $('.js-buttons-dropdown__button_apply')
const clear = $('.js-buttons-dropdown__button_clear')
const myDatepicker = $('.air-datepicker').data('datepicker')


const dddate = new Date('1995-12-17')
const dddate2 = new Date('1995-12-22')

myDatepicker.selectDate([dddate, dddate2])
clear.addClass('display')

apply.on('click', function(){
	myDatepicker.hide()
})
clear.on('click', function () {
	clear.removeClass('display')
	myDatepicker.clear()
})


$('.datepickerRoot').each(function () {
	const $datepickerInput = $('.air-datepicker', this);

	$datepickerInput.datepicker({
		onSelect: function(formattedDate, date, inst) {
			if(formattedDate !== ''){
				clear.addClass('display')
				console.log(formattedDate)
			}else{
				clear.removeClass('display')
			}
		},
	})
	


});
