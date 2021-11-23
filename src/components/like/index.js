import Like from './Like';
import './like.scss';

const likeButtonNodes = document.querySelectorAll('.js-like');

if (likeButtonNodes) {
  likeButtonNodes.forEach((selector) => new Like(selector));
}
