import 'jquery-ui-slider/jquery-ui';
import 'jquery-ui-slider/jquery-ui.css';

import RangeSlider from './RangeSlider';
import './range-slider.scss';

const rangeSliderNodes = document.querySelectorAll('.js-range-slider');
rangeSliderNodes.forEach((element) => new RangeSlider(element));
