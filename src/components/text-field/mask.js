import Inputmask from 'inputmask';

const maskedTextFieldNodes = document.querySelectorAll('.js-text-field__input_with-mask');

if (maskedTextFieldNodes.length > 0) {
  maskedTextFieldNodes.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: '__.__.____',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}
