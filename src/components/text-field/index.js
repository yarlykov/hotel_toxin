import Inputmask from 'inputmask';
import './text-field.scss';

const maskedTextFieldNodes = document.querySelectorAll('.js-text-field__input_with-mask');

if (maskedTextFieldNodes) {
  maskedTextFieldNodes.forEach((selector) => {
    Inputmask('datetime', {
      inputFormat: 'dd.mm.yyyy',
      placeholder: '__.__.____',
      showMaskOnHover: false,
      showMaskOnFocus: false,
    }).mask(selector);
  });
}
