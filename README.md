# MetaLamp 2 task - Hotel website layout and UI Kit

Второе задание - практика верстки [макета](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1) сайта по поиску номеров отеля из Figma.

[**Ссылка на стартовую страницу проекта**](https://yarlykov.github.io/hotel_toxin/start-page.html)

## Особенности проекта

- Разработка велась под последние версии Chrome и Firefox (last 3 version)
- Применен подход отзывчиво-адаптивной (responsive) верстки для разрешений экрана от 320px до 1980px
- Компонентный подход выполнен по принципу разделения интерфейса на независимые блоки (методология [БЭМ](https://ru.bem.info/methodology/quick-start/))
- Для соблюдения компонентного подхода были использованы такие инструменты, как сборщик проектов [Webpack](https://webpack.js.org) (version 5), шаблонизатор [Pug(Jade)](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228) и препроцессор [SCSS](https://sass-scss.ru)
- Для преобразования кода ECMAScript 2015+ в обратно совместимую версию JavaScript использован [Babel](https://babeljs.io), а для обратной совместимости новых свойств CSS применен [PostCSS](https://postcss.org) (autoprefixer, css-mqpacker, cssnano)
- В проекте используется [стайлгайд от AirBnB](https://github.com/airbnb/javascript) для соблюдения лучшей читаемости, единообразия и чистоты кода
- Для проверки JavaScript и SCSS кода на соответствие стайлгайду AirBnB в проекте используются линтеры [eslint](https://eslint.org/) и [stylelint](https://stylelint.io/)
- Использован шрифт, находящийся в свободном доступе: [Montserrat](https://fonts.google.com/specimen/Montserrat). Все шрифты подключены локально в форматах: _woff2_, _woff_, _ttf_ и _svg_.
- Также некоторые элементы дизайна выполнены иконочными шрифтами [Material Icons](https://google.github.io/material-design-icons/) и [Font Awesome 5](https://fontawesome.com)
- Для контроля максимального соответствия [макету](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1) использовалось браузерное расширение PerfectPixel

В проекте выполнен [**_Ui Kit_**](https://yarlykov.github.io/hotel_toxin/start-page.html) (единый макет дизайна), который состоит из четырех отдельных страниц:

- [**Colors & Types**](https://yarlykov.github.io/hotel_toxin/ui-kit-colors-type.html)
- [**Headers & Footers**](https://yarlykov.github.io/hotel_toxin/ui-kit-headers-footers.html)
- [**Form & Elements**](https://yarlykov.github.io/hotel_toxin/ui-kit-form-elements.html)
- [**Cards**](https://yarlykov.github.io/hotel_toxin/ui-kit-cards.html)

А также макет сайта, который включает в себя 5 страниц:

- [**Landing**](https://yarlykov.github.io/hotel_toxin/landing-page.html)
- [**Sign in page**](https://yarlykov.github.io/hotel_toxin/sign-in-page.html)
- [**Registration page**](https://yarlykov.github.io/hotel_toxin/registration-page.html)
- [**Search room**](https://yarlykov.github.io/hotel_toxin/search-room-page.html)
- [**Room details**](https://yarlykov.github.io/hotel_toxin/room-details-page.html)

## Развертывание

**Clone repository:**

```bash
  git clone https://github.com/yarlykov/hotel_toxin.git
```

`npm install` - **installing dependencies**

**Development server:**

`npm start` - **start of the project on the server localhost:8081**

**Linting code:**

`npm run lint` - **linting javascript code**

`npm run lint:fix` - **fix javascript syntax errors**

**Deploying project:**

`npm run deploy` - **deploying the project to gh-pages**

## Сторонние библиотеки

В проекте использованы сторонние JavaScript библиотеки:

- [**Air Datepicker**](http://t1m0n.name/air-datepicker/docs/index-ru.html) (version 2.2.3)
- [**Inputmask**](https://github.com/RobinHerbots/Inputmask) (version 5.0.6)
- [**jQuery**](https://jquery.com) (version 3.6.0)
- [**jQuery UI Slider**](https://jqueryui.com/slider/#range) (version 1.12.1)
- [**Pagination.js**](https://pagination.js.org) (version 2.1.5)
- [**Slick**](https://github.com/kenwheeler/slick#readme) (version 1.8.1)
