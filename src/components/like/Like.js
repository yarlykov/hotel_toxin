class Like {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    this.text = this.root.querySelector('.js-like__text');
    if (!this.isEnabled()) this.disabled();

    this.root.addEventListener('click', this.handleLikeClick.bind(this));
  }

  handleLikeClick() {
    this.root.classList.toggle('like_active');
    this.counter();
  }

  isEnabled() {
    return this.root.classList.contains('like_active');
  }

  disabled() {
    this.root.classList.remove('like_active');
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
