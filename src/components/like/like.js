class Like {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.text = this.root.querySelector('[data-id="like-text"]');
    this.heart = this.root.querySelector('[data-id="like-icon"]');

    this.root.addEventListener('click', this.handleLikeButtonClick.bind(this));
  }

  handleLikeButtonClick() {
    this.buttonToggle();
    this.iconToggle();
    this.counter();
  }

  buttonToggle() {
    this.root.classList.toggle('like_inactive-border');
    this.text.classList.toggle('like__text_inactive');
  }

  isEnabled() {
    return this.heart.classList.contains('like__icon_heart');
  }

  iconToggle() {
    if (this.isEnabled()) {
      this.heart.classList.remove('like__icon_heart');
      this.heart.classList.add('like__icon_empty-heart');
    } else {
      this.heart.classList.remove('like__icon_empty-heart');
      this.heart.classList.add('like__icon_heart');
    }
  }

  counter() {
    const currentValue = Number(this.text.textContent);
    if (!this.isEnabled()) {
      this.text.innerHTML = this.decrement(currentValue);
    } else {
      this.text.innerHTML = this.increment(currentValue);
    }
  }

  increment(value) {
    return `${value + 1}`;
  }

  decrement(value) {
    return `${value - 1}`;
  }
}

export default Like;
