import storage from './helpers/storage';
import rootReducer from './redux/rootReducer';
import createStore from './redux/createStore';

class MenuWidget {
  constructor(selector) {
    this.menuWidget = selector;
    this.store = createStore(rootReducer, storage('theme'));
    this.init();
  }

  init() {
    this.toggleButton = this.menuWidget.querySelector('.js-menu-widget__toggle');
    this.toggleInput = this.toggleButton.querySelector('.js-toggle__input');
    this.dayToggleTitle = this.toggleButton.querySelector('.js-toggle-title');

    this.menuTextColor = this.menuWidget.querySelectorAll('.js-menu-widget__text');
    const logo = this.menuWidget.querySelector('.js-menu-widget__logo');
    this.logo = logo.querySelector('.js-logo');
    this.logoTextColor = this.menuWidget.querySelectorAll('.js-logo__letter');

    this.store.subscribe((state) => {
      storage('theme', state.value);

      this.theme(storage('theme'));
    });

    this.store.dispatchEvent({ type: 'INIT_APPLICATION' });
    this.toggle();
  }

  toggle() {
    this.toggleButton.addEventListener('change', this.handleToggleChange.bind(this));
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
    this.menuWidget.style.background = '#fff';

    this.themeTextColor('day');
  }

  night() {
    this.dayToggleTitle.textContent = 'Ночь';
    this.dayToggleTitle.style.color = '#BC9CFF';
    this.menuWidget.style.background = '#1D1E33';
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

  handleToggleChange() {
    const handleToggleChange = this.dayToggleTitle.textContent === 'День' ? 'night' : 'day';
    this.store.dispatchEvent({ type: 'CHANGE_THEME', payload: handleToggleChange });
  }
}

export default MenuWidget;
