const $filterMainNode = $('.js-search-room__filter');
const $searchRoomMainNode = $('.js-search-room');

$searchRoomMainNode.each(() => {
  const $filterIcon = $('.js-filter__icon');

  $filterIcon.on('click', () => {
    $searchRoomMainNode.toggleClass('js-search-room__active');
  });
});

$(document).on('mouseup', (e) => {
  if (!$filterMainNode.is(e.target) && $filterMainNode.has(e.target).length === 0) {
    $searchRoomMainNode.removeClass('js-search-room__active');
  }
});
