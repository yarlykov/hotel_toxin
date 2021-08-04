const $likeButtons = $('.js-like__button');

const handleLikeButtonClick = function () {
  const $likesCounter = $('.js-like__text', this);
  const likesCount = $likesCounter.text();

  $(this).toggleClass('like__inactive-border');
  $likesCounter.toggleClass('like__inactive');

  const isClicked = $(this).hasClass('like__inactive-border');
  $likesCounter.text((isClicked)
    ? +likesCount - 1
    : +likesCount + 1);

  const $likeIcon = $('.like__icon', this);

  if ($likeIcon.hasClass('like__icon_heart')) {
    $likeIcon.removeClass('like__icon_heart');
  } else {
    $likeIcon.addClass('like__icon_heart');
  }

  if ($likeIcon.hasClass('like__icon_empty-heart')) {
    $likeIcon.removeClass('like__icon_empty-heart');
  } else {
    $likeIcon.addClass('like__icon_empty-heart');
  }
};

$likeButtons.on('click', handleLikeButtonClick);
