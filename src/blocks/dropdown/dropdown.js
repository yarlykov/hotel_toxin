// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$mainNode = document.querySelector(selector)
		// this.$menuItems = this.$mainNode.querySelectorAll('.dropdown__menu-item')

		this.init()
		this.setPlaceholder()
		this.counter()
		this._setup()
	}

	init () {
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
	}

	_setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$mainNode.addEventListener('click', this.clickHandler)
	}

	counter() {
		this.$menuItem.forEach(function(item){

			const amount = item.countInput

			item.increment.addEventListener('click', () => {
				let currentValue = Number(amount.value)
				amount.value = ++currentValue
			})

			item.decrement.addEventListener('click', () => {
				let currentValue = +amount.value
				if (currentValue > 0){
					amount.value = --currentValue
				}
			}) 
		})
	}

	setPlaceholder() {

	}

	clickHandler(event) {
		const {type} = event.target.dataset
		
		if (type === 'input' || type === 'arrow'){
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
	plurals: {
		guests: ['гость', 'гостя', 'гостей'],
		babies: ['младенец', 'младенца', 'младенцев']
	}
})

window.s = dropdown



