// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$mainNode = document.querySelector(selector)
		this.options = options

		this.init()
		this._setup()
	}

	init() {
		this.totalItems = 0
		this.baby = 0
		this.$input = this.$mainNode.querySelector('.dropdown__input')
		this.$menuItems = this.$mainNode.querySelectorAll('.dropdown__menu-item')
		this.$menuItem = Array.from(this.$menuItems).map(item => ({
			increment: item.querySelector('.controls__increment'),
			decrement: item.querySelector('.controls__decrement'),
			countInput: item.querySelector('.controls__counter'),
			count: Number(item.querySelector('.controls__counter').getAttribute('value')),
			id: item.dataset.id
		}))

		this.counter()

	}

	_setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$mainNode.addEventListener('click', this.clickHandler)
	}


	counter() {
		let that = this

		this.$menuItem.forEach(function (item) {
			const amount = item.countInput

			item.increment.addEventListener('click', () => {
				let currentValue = Number(amount.value)

				amount.value = ++currentValue
				that.totalItems++
				// console.log('total', that.totalItems)
				that.isBaby(item.id, 'increment')
				that.inputText()
			})

			item.decrement.addEventListener('click', () => {
				let currentValue = Number(amount.value)

				if (currentValue > 0) {
					amount.value = --currentValue
					that.totalItems--
					// console.log('total', that.totalItems)
					that.isBaby(item.id, 'decrement')
					that.inputText()
				}
			})
		})
	}

	declensionsOfInputText (amount){
		const { pluralsGuests: guests, pluralsBabies: babies } = this.options

		amount = Math.abs(amount)%100
		let amount2 = amount%10
		if (amount > 10 && amount < 20) {return guests[2]}
		if (amount2 > 1 && amount2 < 5) {return guests[1]}
		if (amount2 == 1) {return guests[0]}
		return guests[2]
	}

	inputText (){
		const {defaultText} = this.options
		const declensionsText = this.declensionsOfInputText(this.totalItems)
		const textInput = `${this.totalItems} ${declensionsText}` 
		// const textInputBabies = `${ this.baby } младенцев`
	

		this.totalItems > 0 
		? this.$input.value = textInput 
		: this.$input.value = defaultText
		
	}

	isBaby(id, operator) {
		if (id === 'babies') {
			operator === 'increment' ? this.baby++ : this.baby--
			// console.log('babies:', this.baby)
		}
	}


	clickHandler(event) {
		const { type } = event.target.dataset

		if (type === 'input' || type === 'arrow') {
			this.toggle()
		}
	}

	get isOpen() {
		return this.$mainNode.classList.contains('open')
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
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
	pluralsGuests: ['гость', 'гостя', 'гостей'],
	pluralsBabies: ['младенец', 'младенца', 'младенцев']
	}
)

window.s = dropdown



