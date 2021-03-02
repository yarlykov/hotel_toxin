const startPage = document.body;
const toggleStartPage = startPage.querySelector('.js-start-page__toggle');
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
  startPageStyle.transition = '0.3s';
  startPageStyle.background = '#fff';

  themeTextColor('day');
};

const night = function () {
  dayToggleTitle.textContent = 'Ночь';
  dayToggleTitle.style.color = '#BC9CFF';
  startPageStyle.transition = '0.3s';
  startPageStyle.background = '#1D1E33';

  themeTextColor('night');
};

const theme = function (timesOfDay) {
  if (timesOfDay === 'day') {
    night();
  } else {
    day();
  }
};

toggleStartPage.addEventListener('change', () => {
  if (dayToggleTitle.textContent === 'День') {
    theme('day');
  } else {
    theme('night');
  }
});
