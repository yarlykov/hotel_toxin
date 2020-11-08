import 'air-datepicker/dist/js/datepicker.js';
import 'air-datepicker/dist/css/datepicker.css';


//Нужно тут все переписать!!!!

$('.air-datepicker').datepicker({
  dateFormat: 'd M',
  multipleDatesSeparator: ' - ',
  range: true,
  // inline: true,
  navTitles: {
    days: 'MM yyyy'
  },
  // clearButton: true,
  // todayButton: true,
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  // offset: -10,
})
$('.air-datepicker__inline').datepicker({
  dateFormat: 'd M',
  multipleDatesSeparator: ' - ',
  range: true,
  inline: true,
  navTitles: {
    days: 'MM yyyy'
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
})

const root = $('.datepicker')
const btnWrap = document.createElement('div')
const clearBtn = document.createElement('button')
const applyBtn = document.createElement('button')

btnWrap.classList.add('buttons-dropdown__wrapper_datepicker', 'js-buttons-dropdown__wrapper')

clearBtn.classList.add('button_text-color_gray', 'js-buttons-dropdown__button', 'js-buttons-dropdown__button_clear', 'font__h3',)
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

const datepickerButtons = {
  apply: $('.js-buttons-dropdown__button_apply'),
  clear: $('.js-buttons-dropdown__button_clear')
}


//----------------------------------------
const myDatepicker = $('.air-datepicker').data('datepicker')
//----------------------------------------

// Добавление даты по умолчанию

// const dddate = new Date('2020-09-17')
// const dddate2 = new Date('2020-09-23')

// myDatepicker.selectDate([dddate, dddate2])
// datepickerButtons.clear.addClass('display')

//----------------------------------------

datepickerButtons.apply.on('click', function(){
  myDatepicker.hide()
})
datepickerButtons.clear.on('click', function () {
  datepickerButtons.clear.removeClass('display')
  myDatepicker.clear()
})


$('.js-datepicker__wrapper').each(function () {
  const $datepickerInput = $('.air-datepicker', this);

  $datepickerInput.datepicker({
    onSelect: function(formattedDate, date, inst) {
      if(formattedDate !== ''){
        datepickerButtons.clear.addClass('display')
      }else{
        datepickerButtons.clear.removeClass('display')
      }
    },
  })
});


$('.js-air-datepicker__day-start').datepicker({
  dateFormat: 'dd.mm.yyyy',
  position: "bottom left",
  navTitles: {
    days: 'MM yyyy'
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  // offset: -10,
})
$('.js-air-datepicker__day-end').datepicker({
  dateFormat: 'dd.mm.yyyy',
  position: "bottom right",
  navTitles: {
    days: 'MM yyyy'
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  // offset: -10,
})


const $dateStart = $('.js-air-datepicker__day-start')
const $dateEnd = $('.js-air-datepicker__day-end')

$dateStart.datepicker({
  onSelect: function (fd, date) {
    $dateEnd.data('datepicker')
      .update('minDate', date);

    $dateEnd.focus();
  }
})

$dateEnd.datepicker({
  onSelect: function (fd, date) {
    $dateStart.data('datepicker')
      .update('maxDate', date)
  }
})