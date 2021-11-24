import MenuWidget from './MenuWidget';
import './menu-widget.scss';

const isStartPage = document.querySelector('.start-page');

if (isStartPage) {
  const startPage = document.body;
  new MenuWidget(startPage);
}
