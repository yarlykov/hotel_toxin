import Like from './Like';
import './like.scss';

const likeButtonNodes = document.querySelectorAll('.js-like');
likeButtonNodes.forEach((selector) => new Like(selector));
