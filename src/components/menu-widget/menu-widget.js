const toggleStartPageImages = $('.start-page__toggle');
const listMainMenuStartPage = $('.js-menu-widget__list');
const imagesMainMenuStartPage = $('.js-menu-widget__images-container');
const headerListMenuStartPage = $('.js-start-page__header');
let menuStartPage = $('.start-page__menu');
let toggleTitle = $('.toggle__title');

imagesMainMenuStartPage.hide();

toggleStartPageImages.on('change', function () {
  toggleTitle.text() === 'Показать изображения'
    ? toggleTitle.text('Скрыть изображения')
    : toggleTitle.text('Показать изображения');

  let widthMenuStartPage = menuStartPage.width();
  console.log(widthMenuStartPage);

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
