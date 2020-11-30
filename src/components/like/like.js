$(document).ready(() => {
  const $likeButtons = $('.like__button');

  const clickHandler = function () {
    const $likesCounter = $('.like__text', this);
    const likesCount = $likesCounter.text();

    $(this).toggleClass('like__disable_border');
    $('.js-like__text', this).toggleClass('like__disable');

    const isClicked = $(this).hasClass('like__disable_border');
    $likesCounter.text((isClicked)
      ? +likesCount - 1
      : +likesCount + 1);

    const $likeIcon = $('.like__icon', this);

    if ($likeIcon.hasClass('like__icon_favorite')) {
      $likeIcon.removeClass('like__icon_favorite');
    } else {
      $likeIcon.addClass('like__icon_favorite');
    }

    if ($likeIcon.hasClass('like__icon_favorite_border')) {
      $likeIcon.removeClass('like__icon_favorite_border');
    } else {
      $likeIcon.addClass('like__icon_favorite_border');
    }
  };

  $likeButtons.on('click', clickHandler);
});
