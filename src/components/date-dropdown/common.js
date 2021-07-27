import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';
import DateDropdown from './DateDropdown';

/* =============== Date dropdown ================== */
const twoInputsDateDropdown = $('.js-date-dropdown__day-start');
new DateDropdown(twoInputsDateDropdown, {
  dateFormat: 'dd.mm.yyyy',
  position: 'bottom left',
  offset: 5,
  range: true,
  navTitles: {
    days: 'MM yyyy',
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  twoInputs: true,
});

/* =============== Filter date dropdown ================== */
const filterDateDropdown = $('.js-date-dropdown__filter');
new DateDropdown(filterDateDropdown, {
  dateFormat: 'd M',
  multipleDatesSeparator: ' - ',
  offset: 5,
  range: true,
  navTitles: {
    days: '<span>MM yyyy</span>',
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  initialDates: [new Date('2019-08-19'), new Date('2019-08-23')],
  smallSize: true,
});

/* =============== For Cards page ================== */
const inlineDateDropdown = $('.js-date-dropdown__inline');
new DateDropdown(inlineDateDropdown, {
  dateFormat: 'd M',
  multipleDatesSeparator: ' - ',
  range: true,
  inline: true,
  navTitles: {
    days: '<span>MM yyyy</span>',
  },
  prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
  nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
  initialDates: [new Date('2019-08-19'), new Date('2019-08-23')],
});
