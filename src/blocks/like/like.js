$(document).ready(function(){
	const $likeButtons = $('.like__button')
	
	const clickHandler = function () {
		const $likesCounter = $('.like__text', this)
		const likesCount = $likesCounter.text()
	
		$(this).toggleClass('like__disable_border')
		$('.like__icon', this).toggleClass('like__disable')
		$('.like__text', this).toggleClass('like__disable')
	
		const isClicked = $(this).hasClass('like__disable_border')
		$likesCounter.text((isClicked) ? +likesCount - 1 : +likesCount + 1)
	
		$('.like__icon', this).text((isClicked) ? 'favorite_border' : 'favorite') 
	}
	
	$likeButtons.on('click', clickHandler)
})