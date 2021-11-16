import Like from './Like';
import './like.scss';

const likeButtonNodes = document.querySelectorAll('.js-like');
if (likeButtonNodes.length > 0) {
  likeButtonNodes.forEach((selector) => new Like(selector));
}
