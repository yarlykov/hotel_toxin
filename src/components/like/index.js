import './like.scss';
import Like from './Like';

const likeButtonNodes = document.querySelectorAll('[data-id="like-button"]');
if (likeButtonNodes.length > 0) {
  likeButtonNodes.forEach((selector) => new Like(selector));
}
