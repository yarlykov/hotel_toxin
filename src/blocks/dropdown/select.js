


export class Dropdown {

	constructor(selector, options){
		this.$el = document.querySelector(selector)
	}

	open(){
		this.$el.classList.add('open')
	}
	
	close(){
		this.$el.classList.remove('open')
	}

}

