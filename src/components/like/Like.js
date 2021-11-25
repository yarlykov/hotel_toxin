class Like {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.text = this.root.querySelector('.js-like__text');
    this.heart = this.root.querySelector('.js-like__icon');
    if (!this.isEnabled()) this.disabled();

    this.root.addEventListener('click', this.handleLikeClick.bind(this));
  }

  handleLikeClick() {
    this.buttonToggle();
    this.iconToggle();
    this.counter();
  }

  buttonToggle() {
    this.root.classList.toggle('like_inactive-background');
    this.text.classList.toggle('like__text_inactive-text');
  }

  isEnabled() {
    return this.heart.classList.contains('like__icon_active');
  }

  disabled() {
    this.root.classList.add('like_inactive-background');
    this.text.classList.add('like__text_inactive-text');
  }

  iconToggle() {
    this.heart.classList.toggle('like__icon_active');
  }

  counter() {
    const currentValue = Number(this.text.textContent);
    if (!this.isEnabled()) {
      this.text.textContent = `${currentValue - 1}`;
    } else {
      this.text.textContent = `${currentValue + 1}`;
    }
  }
}

export default Like;
