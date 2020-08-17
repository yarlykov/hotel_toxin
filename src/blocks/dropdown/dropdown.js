// import {Dropdown} from './select'

class Dropdown {

	constructor(selector, options) {
		this.$el = document.querySelector(selector)
		

		this.setup()
	}

	setup() {
		this.clickHandler = this.clickHandler.bind(this)
		this.$el.addEventListener('click', this.clickHandler)
	}

	

	clickHandler(event) {
		const {type} = event.target.dataset




			
			const span = this.$el.parentElement.querySelector('.controls__counter')
			const currentValue = +span.textContent
			let newValue;
	
			if(type === 'increment'){
				newValue = currentValue + 1
			} else {
				newValue = currentValue - 1 > 0 ? currentValue - 1 : 0
			}
	
			span.textContent = newValue
	



		// const {id} = event.target.dataset
		// let flag = Boolean
		// const dataId = this.$el.parentElement.querySelector('.dropdown__menu-item').getAttribute('data-id')
		

		if (type === 'input' || type === 'arrow'){
			this.toggle()
			console.log(currentValue)
		}
		// if (id){
		// 	console.log(id)
		// }
		// if (type === 'decrement'){
		// 	flag = 'minus'
		// 	console.log(dataId)
		// 	this.counter(flag)
		// }
		// if (type === 'increment'){
		// 	flag = 'plus'
		// 	this.counter(flag)
		// }
	}

	// counter(flag) {
	// 	let countValue;
	// 	let count = this.$el.querySelector('.controls__counter')

	// 	// console.log(count)


	// 	let currentCountValue = Number(count.textContent);	

	// 	if (flag === 'minus' && currentCountValue !== 0){
	// 		countValue = currentCountValue - 1
	// 		count.textContent = `${countValue.toString()}`
	// 	}else if(flag === 'plus'){
	// 		countValue = currentCountValue + 1
	// 		count.textContent = `${countValue.toString()}`
	// 	}
	// }

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