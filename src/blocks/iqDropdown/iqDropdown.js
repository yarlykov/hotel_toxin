import './item-quantity-dropdown.css';
import './item-quantity-dropdown.js';

// $(document).ready(function () {
// 	$(".no-config").iqDropdown({
// 		initialText: "Сколько гостей",
// 		selectionText: "гость",
// 		plurals: {
// 			guests: ["гость","гостя","гостей"],
// 			babies: ["младенец", "младенца", "младенцев"],
// 		},
// 		onChange: function () {},
// 		setMessege(itemCount, totalItems){
// 			const infants = itemCount['item-3']
// 			const guests = itemCount['item-1']
// 			let messege = +guests + +infants
// 			console.log(messege)
// 			return messege
// 		}
// 	});
	
$('.no-config').iqDropdown({
	initialText: "Сколько гостей",
	selectionText: "гость",
	textPlural: "гостя",
	moreThenFiveText: "гостей",
	controls: {
		controlBtnsCls: 'iqdropdown-menu-control-buttons',
		clearBtn: true,
		clearBtnLabel: 'Очистить',
		applyBtn: true,
		applyBtnLabel: 'Применить',
	},
	setCustomMessage(itemCount, totalItems) {
		const infants = itemCount['item-3'];
		const guests = itemCount['item-1'] + itemCount['item-2'];
		let message = +guests;

		if (guests === 0) {
			message = this.initialText;
		} else if (guests === 1) {
			message += ` ${this.selectionText}`;
		} else if (guests < 5) {
			message += ` ${this.textPlural}`;
		} else if (guests >= 5) {
			message += ` ${this.moreThenFiveText}`
		}

		if (infants === 1) {
			message += `, 1 младенец`;
		} else if (infants > 1 && infants < 5) {
			message += `, ${infants} младенца`;
		} else if (infants >= 5) {
			message += `, ${infants} младенцев`;
		}

		return message;
	},
	onApply: () => { }
})


// 	$(".custom").iqDropdown({
// 		minItems: 1,
// 		maxItems: 5,
// 		selectionText: "passenger",
// 		textPlural: "passengers",
// 		onChange: function (id, count, totalItems) {
// 			console.log(id, count, totalItems);
// 		},
// 		beforeDecrement: function (id, itemCount) {
// 			if (id === "adult") {
// 				return itemCount.adult > itemCount.infant;
// 			}
// 			return true;
// 		},
// 		beforeIncrement: function (id, itemCount) {
// 			if (id === "infant") {
// 				return itemCount.adult > itemCount.infant;
// 			}
// 			return true;
// 		}
// 	});

// 	$(".custom-message").iqDropdown({
// 		minItems: 0,
// 		onChange: function (id, count, totalItems) {
// 			console.log(id, count, totalItems);
// 		},
// 		setSelectionText: function (itemCount, totalItems) {
// 			const items = Object.keys(itemCount)
// 				.map(key => itemCount[key])
// 				.join(' + ');
// 			return items + ' = ' + totalItems;
// 		}
// 	});
// });