# FSD 2 task - Hotel website layout and UI Kit
 Второе задание - практика верстки [макета](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1) сайта по поиску номеров отеля из Figma.

 ##  Особенности проекта
  - Разработка велась под последние версии Chrome и Firefox (last 3 version)
  - Применен подход отзывчиво-адаптивной (responsive) верстки для разрешений экрана от 320px до 1980px
  - Компонентный подход выполнен по принципу разделения интерфейса на независимые блоки (методология [БЭМ](https://ru.bem.info/methodology/quick-start/))
  - Для соблюдения компонентного подхода были использованы такие инструменты, как сборщик проектов [Webpack](https://webpack.js.org) (version 4), шаблонизатор [Pug(Jade)](https://gist.github.com/neretin-trike/53aff5afb76153f050c958b82abd9228) и препроцессор [SCSS](https://sass-scss.ru)
  - Для преобразования кода ECMAScript 2015+ в обратно совместимую версию JavaScript использован [Babel](https://babeljs.io) (version 7), а для обратной совместимости новых свойств CSS применен [PostCSS](https://postcss.org) (autoprefixer, css-mqpacker, cssnano)
  - В прокте используется [стайлгайд от AirBnB](https://github.com/airbnb/javascript) для соблюдения лучшей читаймости, единообразия и чистоты кода
  - Использованы шрифты, находящиеся в свободном доступе: [Montserrat](https://fonts.google.com/specimen/Montserrat), [Quicksand](https://fonts.google.com/specimen/Quicksand). Все шрифты подключены локально в форматах: *woff2*, *woff*, *ttf* и *svg*.
  - Также некоторые элементы дизайна выполнены иконочными шрифтами [Material Icons](https://google.github.io/material-design-icons/) и [Font Awesome 5](https://fontawesome.com)
  - Для контроля максимального соотвествия [макету](https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/FSD-frontend-education-program.-The-2nd-task?node-id=0%3A1) использовалось браузерное расширение PerfectPixel
 
  В проекте выполнен [***Ui Kit***](https://yarlykov.github.io/hotel_toxin/start-page.html) (единый макет дизайна), который состоит из четырех отдельных страниц:
 
 - [**Colors & Types**](https://yarlykov.github.io/hotel_toxin/ui-kit-colors-type.html)
 - [**Headers & Footers**](https://yarlykov.github.io/hotel_toxin/ui-kit-headers-footers.html)
 - [**Form & Elements**](https://yarlykov.github.io/hotel_toxin/ui-kit-form-elements.html)
 - [**Cards**](https://yarlykov.github.io/hotel_toxin/ui-kit-cards.html)

А также макет сайта, который включает в себя 5 страниц:

- [**Landing**](https://yarlykov.github.io/hotel_toxin/landing-page.html)
- [**Sing in page**](https://yarlykov.github.io/hotel_toxin/sing-in-page.html)
- [**Registration page**](https://yarlykov.github.io/hotel_toxin/registration-page.html)
- [**Search room**](https://yarlykov.github.io/hotel_toxin/search-room-page.html)
- [**Room details**](https://yarlykov.github.io/hotel_toxin/room-details-page.html)
 
 ## Развертывание
 
**Clone repository:**
 `git clone https://github.com/yarlykov/hotel_toxin.git`
 
 `npm install` - **installing dependencies**

**Development server:**

 `npm start` - **start of the project on the server localhost:8081**

**Linting code:**

 `npm run lint` - **linting javascript code**

 `npm run lint:fix` - **fix javascript syntax errors**

**Deploying project:**

 `npm run deploy` - **deploying the project to gh-pages**

 ##  Сторонние библиотеки

 В проекте использованы сторонние JavaScript библиотеки:

- [**Air Datepicker**](http://t1m0n.name/air-datepicker/docs/index-ru.html) (version 2.2.3)
- [**Inputmask**](https://github.com/RobinHerbots/Inputmask) (version 5.0.5)
- [**jQuery**](https://jquery.com) (version 3.5.1)
- [**jQuery UI Slider**](https://jqueryui.com/slider/#range) (version 1.12.1)
- [**Pagination.js**](https://pagination.js.org) (version 2.1.5)
- [**Slick**](https://github.com/kenwheeler/slick#readme) (version 1.8.1)