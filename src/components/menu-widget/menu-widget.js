import createStore from './createStore';
import rootReducer from './redux/rootReducer';

const startPage = document.body;
const toggleStartPage = startPage.querySelector('.js-start-page__toggle');
const toggleInput = startPage.querySelector('.toggle__input');
const dayToggleTitle = toggleStartPage.querySelector('.js-toggle-title');
const startPageStyle = startPage.style;

const menuTextColor = startPage.querySelectorAll('.js-menu-widget__text');
const logo = startPage.querySelector('.js-logo__color-with-text');
const logoTextColor = logo.querySelectorAll('.js-logo__letter');

function themeTextColor(timesOfDay) {
  const color = timesOfDay === 'day' ? '#1F2041' : '#66d2ea';

  menuTextColor.forEach((item) => {
    const menuItem = item;
    menuItem.style.color = `${color}`;
  });

  logoTextColor.forEach((item) => {
    const logoLetter = item;
    logoLetter.setAttribute('fill', `${color}`);
  });
}

const day = function () {
  dayToggleTitle.textContent = 'День';
  dayToggleTitle.style.color = '#c7c7d0';
  startPageStyle.background = '#fff';

  themeTextColor('day');
};

const night = function () {
  dayToggleTitle.textContent = 'Ночь';
  dayToggleTitle.style.color = '#BC9CFF';
  startPageStyle.background = '#1D1E33';
  toggleInput.checked = true;

  themeTextColor('night');
};

const theme = function (timesOfDay = 'day') {
  if (timesOfDay === 'day') {
    day();
  } else {
    night();
  }
};

function storage(key, data = null) {
  if (!data) {
    return JSON.parse(localStorage.getItem(key)) || 'day';
  }
  localStorage.setItem(key, JSON.stringify(data));
  return key;
}

const store = createStore(rootReducer, storage('theme'));

store.subscribe((state) => {
  storage('theme', state.value);

  theme(storage('theme'));
});

store.dispatchEvent({ type: 'INIT_APPLICATION' });

toggleStartPage.addEventListener('change', () => {
  const newTheme = dayToggleTitle.textContent === 'День' ? 'night' : 'day';
  store.dispatchEvent({ type: 'CHANGE_THEME', payload: newTheme });
});
