// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$mainNode = selector
		this.options = options

		this.init()
		this._setup()
	}

	_setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$mainNode.addEventListener('click', this.clickHandler)
	}

	init() {
		const {buttons} = this.options

		this.totalItems = 0
		this.maxItems = this.options.maxItems
		this.menuItemValue = { baby: 0, bedrooms: 0, beds: 0, baths: 0 }

		this.$input = this.$mainNode.querySelector('.dropdown__input')
		this.$drop = this.$mainNode.querySelector('.dropdown__drop')
		this.$menuItems = this.$mainNode.querySelectorAll('.dropdown__menu-item')
		this.$menuItem = Array.from(this.$menuItems).map(item => ({
			increment: item.querySelector('.controls__increment'),
			decrement: item.querySelector('.controls__decrement'),
			countInput: item.querySelector('.controls__counter'),
			id: item.dataset.id,
			value: Number(item.querySelector('.controls__counter').value),
			isBabyValue: item.dataset.id === 'Младенцы' ? Number(item.querySelector('.controls__counter').value) : 0,
			isBedroomsValue: item.dataset.id === 'Спальни' ? Number(item.querySelector('.controls__counter').value) : 0,
			isBedsValue: item.dataset.id === 'Кровати' ? Number(item.querySelector('.controls__counter').value) : 0,
		}))

		buttons ? this.addButtons() : null

		this.startInputValue()
		this.inputTextGuests()
		this.inputTextComfort()
		this.delClearBtn()
	
		this.counter()
		this.disabledButtons()

	}

	startInputValue(){
		const startItemsQuantity = this.$menuItem.reduce((acc, item) => item.value + acc, 0)
		const startBabiesQuantity = this.$menuItem.reduce((acc, item) => item.isBabyValue + acc, 0)
		const startBedroomsQuantity = this.$menuItem.reduce((acc, item) => item.isBedroomsValue + acc, 0)
		const startBedsQuantity = this.$menuItem.reduce((acc, item) => item.isBedsValue + acc, 0)

		this.totalItems = startItemsQuantity
		this.menuItemValue.baby = startBabiesQuantity
		this.menuItemValue.bedrooms = startBedroomsQuantity
		this.menuItemValue.beds = startBedsQuantity
	}

	addButtons() {
		const btnWrap = document.createElement('div')
		const clearBtn = document.createElement('button')
		const applyBtn = document.createElement('button')

		btnWrap.classList.add('js-buttons-dropdown__wrapper')

		clearBtn.classList.add( 'button_text-color_gray', 'js-buttons-dropdown__button', 'js-buttons-dropdown__button_clear', 'font__h3')
		clearBtn.setAttribute('type', 'button')
		clearBtn.setAttribute('data-type', 'clear')
		clearBtn.innerHTML = 'Очистить'

		applyBtn.classList.add('button_text-color_purple', 'js-buttons-dropdown__button', 'js-buttons-dropdown__button_apply', 'font__h3')
		applyBtn.setAttribute('type', 'button')
		applyBtn.setAttribute('data-type', 'apply')
		applyBtn.innerHTML = 'Применить'

		btnWrap.appendChild(clearBtn)
		btnWrap.appendChild(applyBtn)
		this.$drop.appendChild(btnWrap) 

		this.clearBtn = this.$mainNode.querySelector('.js-buttons-dropdown__button_clear')
	}

	counter() {
		const that = this

		this.$menuItem.forEach(function (item) {
			const amount = item.countInput

			item.increment.addEventListener('click', () => {
				let currentValue = Number(amount.value)

				if (that.totalItems < that.maxItems){
					amount.value = ++currentValue
					that.totalItems++

					that.isBaby(item.id, 'increment')  //babyCounter

				}

				that.inputTextGuests()
				that.delClearBtn()
				that.disabledButtons()
				that.inputTextComfort()
			})

			item.decrement.addEventListener('click', () => {
				let currentValue = Number(amount.value)

				if (currentValue > 0) {
					amount.value = --currentValue
					that.totalItems--

					that.isBaby(item.id, 'decrement')

					that.inputTextGuests()
					that.delClearBtn()
					that.disabledButtons()
					that.inputTextComfort()

				}
			})

		})

	}

	isBaby(id, operator) {
		if (id === 'Младенцы') {
			operator === 'increment' ? this.menuItemValue.baby++ : this.menuItemValue.baby--

		}
		if (id === 'Спальни') {
			operator === 'increment' ? this.menuItemValue.bedrooms++ : this.menuItemValue.bedrooms--
		}
		if (id === 'Кровати') {
			operator === 'increment' ? this.menuItemValue.beds++ : this.menuItemValue.beds--
		}
		if (id === 'Ванные комнаты') {
			operator === 'increment' ? this.menuItemValue.baths++ : this.menuItemValue.baths--
		}
	}

	inputTextGuests() {
		const { maxItems, defaultText } = this.options
		const { guests = [], babies = [] } = this.options.plurals

		const declTextGuests = this.declensionsOfInputText(this.totalItems, guests)
		const declTextBabies = this.declensionsOfInputText(this.menuItemValue.baby, babies)

		const textInput = this.menuItemValue.baby === 0
			? `${this.totalItems} ${declTextGuests}`
			: `${this.totalItems} ${declTextGuests}, ${this.menuItemValue.baby} ${declTextBabies}`

		this.totalItems > 0 && this.totalItems <= maxItems
			? this.$input.value = textInput
			: this.$input.value = defaultText
	}

	inputTextComfort(){
		const { maxItems, defaultText, type } = this.options

		if (type === 'comfort'){
			
			let textInput = ''
			if(this.totalItems > 0 && this.totalItems <= maxItems){

				const plurals = Object.keys(this.options.plurals)

				for(let plural of plurals){

					if (this.menuItemValue[plural] === 0 ){
						textInput += ''
					}else{
						textInput.length > 8 ? 	textInput += ', ' :	textInput += ''
						
						textInput += `${this.menuItemValue[plural] + ' ' + this.declensionsOfInputText(this.menuItemValue[plural], this.options.plurals[plural])}`
					}
				}

				this.$input.value = this.cutLongText(textInput) 

			}else{
				this.$input.value = defaultText
			}

		}

	}

	cutLongText(str){
		if (str.length > 19){
			str = str.slice(0, 20) + '...'
		}
		return str
	}

	declensionsOfInputText (num, wordArray){

		num = num%100
		let num2 = num%10

		 return (num > 10 && num < 20) ? wordArray[2] : 
					 (num2 > 1 && num2 < 5) ? wordArray[1] :
					(num2 == 1) ? wordArray[0] : wordArray[2]
	}

	clickHandler(event) {
		const { type } = event.target.dataset

		if (type ==='apply'){
			this.close()
		}
		if (type === 'clear'){
			this.clear()
		}
		if (type === 'input' || type === 'arrow') {
			this.toggle()
		}
	}

	get isOpen() {
		return this.$mainNode.classList.contains('open')
	}
	get isNotEmpty(){
		return this.totalItems > 0
	}
	
	delClearBtn(){
		if(this.clearBtn){
			this.isNotEmpty ? this.clearBtn.classList.add('display') : this.clearBtn.classList.remove('display')
		}
	}

	disabledButtons(){
		const {maxItems, minItems} = this.options

		this.$menuItem.map(item => {
			const itemCount = Number(item.countInput.value)

			itemCount <= minItems ? item.decrement.classList.add('disabled') : item.decrement.classList.remove('disabled')
		})

		// this.$menuItem.map(item => {

		// 	maxItems == this.totalItems ? item.increment.classList.add('disabled') : item.increment.classList.remove('disabled')

		// })        // Do you need this functionality?
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
	}


	clear(){
		const {defaultText} = this.options

		this.$menuItem.map(item => {
			item.countInput.value = 0
		})
		this.clearBtn.classList.remove('display')
		this.$input.value = defaultText
		this.totalItems = 0
		this.menuItemValue.baby = 0

		this.disabledButtons()
	}

	open() {
		this.$mainNode.classList.add('open')
	}

	close() {
		this.$mainNode.classList.remove('open')
	}


	destroy() {
		this.$mainNode.removeEventListener('click', this.clickHandler)
	}

}


const dropGuestsMainNode = document.querySelectorAll('.dropdown__guests')
const defaultOptionsGuests = {
	type: 'guests',
	defaultText: 'Сколько гостей',
	minItems: 0,
	maxItems: 20,
	buttons: true,
	plurals: {
		guests: ['гость', 'гостя', 'гостей'],
		babies: ['младенец', 'младенца', 'младенцев']
	},	
}
dropGuestsMainNode.forEach(selector => new Dropdown(selector, defaultOptionsGuests))

const dropComfortMainNode = document.querySelectorAll('.dropdown__comfort')
const defaultOptionsComfort = {
	type: 'comfort',
	defaultText: 'Удобства номера',
	minItems: 0,
	maxItems: 20,
	buttons: false,
	plurals: {
		bedrooms: ['спальня', 'спальни', 'спален'],
		beds: ['кровать', 'кровати', 'кроватей'],
		baths: ['ванная комната', 'ванных комнаты', 'ванных комнат']
	},
}
dropComfortMainNode.forEach(selector => new Dropdown(selector, defaultOptionsComfort))