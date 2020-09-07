import Inputmask from 'inputmask'


let todayDate = new Date()
let day = todayDate.getDate()
let month = todayDate.getMonth() + 1
let year = todayDate.getFullYear()

day < 10 ? day = '0' + day : day
month < 10 ? month = '0' + month : month
todayDate = `${day}/${month}/${year}`

const maskDateSelector = document.querySelector('.masked__text-field_date')

Inputmask('datetime', {
    inputFormat: 'dd.mm.yyyy',
    placeholder: '__.__.____',
    min: '01/01/1900',
    max: todayDate
  }).mask(maskDateSelector);
