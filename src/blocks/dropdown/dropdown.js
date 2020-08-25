// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$mainNode = document.querySelector(selector)
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
		this.baby = 0
		this.maxItems = this.options.maxItems
		this.$input = this.$mainNode.querySelector('.dropdown__input')
		this.$drop = this.$mainNode.querySelector('.dropdown__drop')
		this.$menuItems = this.$mainNode.querySelectorAll('.dropdown__menu-item')
		this.$menuItem = Array.from(this.$menuItems).map(item => ({
			increment: item.querySelector('.controls__increment'),
			decrement: item.querySelector('.controls__decrement'),
			countInput: item.querySelector('.controls__counter'),
			id: item.dataset.id
		}))
	
		buttons ? this.addButtons() : null

		this.counter()
		this.disabledButtons()

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
				}else{
					alert(`Максимальное количество гостей: ${that.maxItems}`)
				}
				that.inputTextGuests()
				that.delClearBtn()
				that.disabledButtons()


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

				}
			})

		})

	}

	isBaby(id, operator) {

		if (id === 'babies') {
			operator === 'increment' ? this.baby++ : this.baby--
		}
	}

	inputTextGuests() {
		const { pluralsGuests: guests, pluralsBabies: babies, maxItems } = this.options
		const { defaultText } = this.options
		const declTextGuests = this.declensionsOfInputText(this.totalItems, guests)
		const declTextBabies = this.declensionsOfInputText(this.baby, babies)

		const textInput = this.baby === 0
			? `${this.totalItems} ${declTextGuests}`
			: `${this.totalItems} ${declTextGuests}, ${this.baby} ${declTextBabies}`

		this.totalItems > 0 && this.totalItems <= maxItems
			? this.$input.value = textInput
			: this.$input.value = defaultText
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
		this.isNotEmpty ? this.clearBtn.classList.add('display') : this.clearBtn.classList.remove('display')
	}

	disabledButtons(){
		const {minItems} = this.options

		this.$menuItem.map(item => {
			const itemCount = Number(item.countInput.value)

			itemCount <= minItems ? item.decrement.classList.add('disabled') : item.decrement.classList.remove('disabled')
		})
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
		this.baby = 0

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



const dropdown = new Dropdown('.dropdown', {
	type: 'guests',
	defaultText: 'Сколько гостей',
	minItems: 0,
	maxItems: 20,
	buttons: true,
	pluralsGuests: ['гость', 'гостя', 'гостей'],
	pluralsBabies: ['младенец', 'младенца', 'младенцев']
	}
)

window.s = dropdown



