const captionsList = document.querySelectorAll('.legend__item');
const unitsList = document.querySelectorAll('.unit');
let sumOfVote = document.querySelector('.chart__sum-of-vote')

const getTemplate = (number, color) => {
  return `
  <g class="chart__sum-of-vote" fill=${color}>
    <text class="sum-of-vote__number" text-anchor="middle" x="50%" y="49%">${number}</text>
    <text class="sum-of-vote__text" text-anchor="middle" x="50%" y="67%">голосов</text>
  </g>
  ` 
}

const sumOfVoteColors = function(index) {
  switch (index) {
    case 0:
      return sumOfVote.innerHTML = getTemplate(500, '#FFE39C');
    case 1:
      return sumOfVote.innerHTML = getTemplate(260, '#BC9CFF');
    case 2:
      return sumOfVote.innerHTML = getTemplate(260, '#6FCF97');
    default:
      return index;
  }
}

captionsList.forEach(function (item, index) {
  if (index === 1) {
    index += 1
  } else if (index === 2) {
    index--
  }
  
  item.addEventListener('mouseover', function () {
    sumOfVoteColors(index)
    unitsList[index].classList.add('js-legend-hovered');
  });

  item.addEventListener('mouseout', function () {
    unitsList[index].classList.remove('js-legend-hovered');
  });
});

unitsList.forEach(function (item, index) {  
  item.addEventListener('mouseover', function () {
    sumOfVoteColors(index);
    unitsList[index].classList.add('js-legend-hovered');
  });

  item.addEventListener('mouseout', function () {
    unitsList[index].classList.remove('js-legend-hovered');
  });
});