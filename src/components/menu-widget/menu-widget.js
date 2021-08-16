import createStore from './createStore';
import rootReducer from './redux/rootReducer';
import storage from './utils';

class MenuWidget {
  constructor(selector) {
    this.$page = selector;
    this.store = createStore(rootReducer, storage('theme'));
    this.init();
  }

  init() {
    this.toggleStartPage = this.$page.querySelector('.js-start-page__toggle');
    this.toggleInput = this.$page.querySelector('.toggle__input');
    this.dayToggleTitle = this.$page.querySelector('.js-toggle-title');
    this.startPageStyle = this.$page.style;

    this.menuTextColor = this.$page.querySelectorAll('.js-menu-widget__text');
    this.logo = this.$page.querySelector('.js-logo');
    this.logoTextColor = this.$page.querySelectorAll('.js-logo__letter');

    this.store.subscribe((state) => {
      storage('theme', state.value);

      this.theme(storage('theme'));
    });

    this.store.dispatchEvent({ type: 'INIT_APPLICATION' });
    this.toggle();
  }

  toggle() {
    this.toggleStartPage.addEventListener('change', () => {
      const newTheme = this.dayToggleTitle.textContent === 'День' ? 'night' : 'day';

      this.store.dispatchEvent({ type: 'CHANGE_THEME', payload: newTheme });
    });
  }

  themeTextColor(timesOfDay) {
    const color = timesOfDay === 'day' ? '#1F2041' : '#66d2ea';

    this.menuTextColor.forEach((item) => {
      const menuItem = item;
      menuItem.style.color = `${color}`;
    });

    this.logoTextColor.forEach((item) => {
      const logoLetter = item;
      logoLetter.setAttribute('fill', `${color}`);
    });
  }

  day() {
    this.dayToggleTitle.textContent = 'День';
    this.dayToggleTitle.style.color = '#c7c7d0';
    this.startPageStyle.background = '#fff';

    this.themeTextColor('day');
  }

  night() {
    this.dayToggleTitle.textContent = 'Ночь';
    this.dayToggleTitle.style.color = '#BC9CFF';
    this.startPageStyle.background = '#1D1E33';
    this.toggleInput.checked = true;

    this.themeTextColor('night');
  }

  theme(timesOfDay = 'day') {
    if (timesOfDay === 'day') {
      this.day();
    } else {
      this.night();
    }
  }
}

const isStartPage = document.querySelector('.start-page');

if (isStartPage !== null) {
  const startPage = document.body;
  new MenuWidget(startPage);
}
