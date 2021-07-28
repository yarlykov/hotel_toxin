/* eslint-disable no-unused-expressions */
import Inputmask from 'inputmask';

function getToday() {
  let todayDate = new Date();
  let day = todayDate.getDate();
  let month = todayDate.getMonth() + 1;
  const year = todayDate.getFullYear();

  (day < 10) ? day = `0${day}` : day;
  (month < 10) ? month = `0${month}` : month;
  todayDate = `${day}/${month}/${year}`;

  return todayDate;
}

const maskDateSelector = document.querySelectorAll('.js-masked__text-field');
maskDateSelector.forEach((selector) => {
  Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: '__.__.____',
    min: '01/01/1900',
    max: getToday(),
    showMaskOnHover: false,
    showMaskOnFocus: false,
  }).mask(selector);
});
