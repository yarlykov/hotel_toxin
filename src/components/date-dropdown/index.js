import 'air-datepicker/dist/js/datepicker';
import 'air-datepicker/dist/css/datepicker.css';
import './date-dropdown.scss';
import DateDropdown from './date-dropdown';

/* =============== Date dropdown ================== */
const $twoInputsDateDropdown = $('[data-id="date-filter-double"]');
if ($twoInputsDateDropdown.length > 0) {
  $twoInputsDateDropdown.each(function init() {
    new DateDropdown($(this), {
      inline: true,
      dateFormat: 'dd.mm.yyyy',
      position: 'bottom left',
      offset: 5,
      range: true,
      navTitles: {
        days: 'MM yyyy',
      },
      prevHtml: '<span class="datepicker__arrow datepicker__arrow_back"></span>',
      nextHtml: '<span class="datepicker__arrow datepicker__arrow_forward"></span>',
      hasTwoInputs: true,
    });
  });
}

/* =============== Filter date dropdown ================== */
const $filterDateDropdown = $('[data-id="date-filter"]');
if ($filterDateDropdown.length > 0) {
  $filterDateDropdown.each(function init() {
    new DateDropdown($(this), {
      startDate: new Date('2019-08-08'),
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
  });
}

/* =============== For Cards page ================== */
const $inlineDateDropdown = $('[data-type="inline-date-dropdown"]');
new DateDropdown($inlineDateDropdown, {
  startDate: new Date('2019-08-08'),
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
