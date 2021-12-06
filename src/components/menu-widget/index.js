import 'components/logo';
import 'components/toggle';

import MenuWidget from './MenuWidget';
import './menu-widget.scss';

const menuWidgetNode = document.querySelector('.js-menu-widget');

if (menuWidgetNode) {
  new MenuWidget(menuWidgetNode);
}
