let captionsList = document.querySelectorAll('.legend__item');
let unitsList = document.querySelectorAll('.unit');

captionsList.forEach(function (item, index) {
  item.addEventListener('mouseover', function () {
    unitsList[index].classList.add('js-legend-hovered');
  });

  item.addEventListener('mouseout', function () {
    unitsList[index].classList.remove('js-legend-hovered');
  });
});