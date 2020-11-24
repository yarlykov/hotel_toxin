/* eslint-disable no-unused-expressions */
const toggleStartPageImages = $('.start-page__toggle');
const listMainMenuStartPage = $('.js-menu-widget__list');
const imagesMainMenuStartPage = $('.js-menu-widget__images-container');
const headerListMenuStartPage = $('.js-start-page__header');
const menuStartPage = $('.start-page__menu');
const toggleTitle = $('.toggle__title');

imagesMainMenuStartPage.hide();

toggleStartPageImages.on('change', () => {
  toggleTitle.text() === 'Показать изображения'
    ? toggleTitle.text('Скрыть изображения')
    : toggleTitle.text('Показать изображения');

  const widthMenuStartPage = menuStartPage.width();

  imagesMainMenuStartPage.toggle();
  listMainMenuStartPage.toggle(450);
  headerListMenuStartPage.toggle();

  if (headerListMenuStartPage.is(':visible')) {
    headerListMenuStartPage.css('display', 'flex');
  }

  if (widthMenuStartPage < 659) {
    headerListMenuStartPage.hide();
  }
});
