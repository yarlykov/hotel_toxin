// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		
		this.counter()
		this.setup()
	}

	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)
	}

	counter() {
		const block = this.$el.querySelectorAll('.dropdown__menu-item')

		block.forEach(function(row){
			const plus = row.querySelector('.controls__increment')
			const minus = row.querySelector('.controls__decrement')
			const val = row.querySelector('.controls__counter')
			plus.addEventListener('click', function(){
				let currentValue = +val.textContent
				val.textContent = currentValue + 1
			})
			minus.addEventListener('click', function(){
				let currentValue = +val.textContent
				if (currentValue > 0){
					val.textContent = currentValue - 1
				}
			})
		})
	}

	clickHandler(event) {
		const {type} = event.target.dataset
		
		if (type === 'input' || type === 'arrow'){
			this.toggle()
		}
	}

	get isOpen() {
		return this.$el.classList.contains('open')
	}

	toggle() {
		this.isOpen ? this.close() : this.open()
	}

	open() {
		this.$el.classList.add('open')
	}

	close() {
		this.$el.classList.remove('open')
	}

	destroy() {
		this.$el.removeEventListener('click', this.clickHandler)
	}

}



const dropdown = new Dropdown('.dropdown', {

})

window.s = dropdown



