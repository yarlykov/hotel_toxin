/* eslint-disable no-unused-expressions */
import Inputmask from 'inputmask';

function getToday() {
  const todayDate = new Date();
  const day = todayDate.getDate();
  const month = todayDate.getMonth() + 1;
  const year = todayDate.getFullYear();
  const formattedDay = (day < 10) ? `0${day}` : day;
  const formattedMonth = (month < 10) ? `0${month}` : month;
  const formattedDate = `${formattedDay}/${formattedMonth}/${year}`;

  return formattedDate;
}

/* =============== Masked Text Field ================== */
const maskedTextField = document.querySelectorAll('[data-type="masked-text-field"]');
if (maskedTextField.length > 0) {
  maskedTextField.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: '__.__.____',
      min: '01/01/1900',
      max: getToday(),
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}

/* =============== Date dropdown Start ================== */
const maskDateDropdownStart = document.querySelectorAll('[data-type="date-dropdown-start"]');
if (maskDateDropdownStart.length > 0) {
  maskDateDropdownStart.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: '__.__.____',
      min: getToday(),
      max: '01/01/2023',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}

/* =============== Date dropdown end ================== */
const maskDateDropdownEnd = document.querySelectorAll('[data-type="date-dropdown-end"]');
if (maskDateDropdownEnd.length > 0) {
  maskDateDropdownEnd.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: '__.__.____',
      min: getToday(),
      max: '01/01/2023',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}
