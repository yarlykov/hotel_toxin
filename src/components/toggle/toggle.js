const toggleStartPageImages = $('.start-page__toggle');
const listMainMenuStartPage = $('.js-menu-widget__list');
const imagesMainMenuStartPage = $('.js-menu-widget__images-container');
const headerListMenuStartPage = $('.js-start-page__header');
let title = $('.toggle__title');

imagesMainMenuStartPage.hide();

toggleStartPageImages.on('change', function () {
  title.text() === 'Показать изображения'
    ? title.text('Скрыть изображения')
    : title.text('Показать изображения');

  let widthHeaderListMenuStartPage = headerListMenuStartPage.width();
  console.log(widthHeaderListMenuStartPage);
  
  imagesMainMenuStartPage.toggle();
  listMainMenuStartPage.toggle(450);
  headerListMenuStartPage.toggle();

  if (widthHeaderListMenuStartPage < 659) {
    headerListMenuStartPage.hide()
    console.log(widthHeaderListMenuStartPage);
  }
});
