class Chart {
  constructor(selector, options) {
    this.root = selector;
    this.options = options;
    this.init();
  }

  init() {
    this.chartBody = this.root.querySelector('[data-id="body"]');
    this.sumOfVote = this.root.querySelector('[data-id="sum-of-vote"]');

    this.root.addEventListener('mouseover', this.handleChartMouseover.bind(this));
    this.root.addEventListener('mouseout', this.handleChartMouseout.bind(this));
  }

  handleChartMouseover({ target }) {
    const { type } = target.dataset;

    if (type) {
      this.sumOfVote.innerHTML = this.getTemplate(type);
      const currentCircle = this.chartBody.querySelector(`[data-type=${type}]`);
      if (currentCircle) currentCircle.classList.add('chart__circle_focused');
    }
  }

  handleChartMouseout({ target }) {
    const { type } = target.dataset;
    const currentCircle = this.chartBody.querySelector(`[data-type=${type}]`);
    if (currentCircle) currentCircle.classList.remove('chart__circle_focused');
  }

  getTemplate(type) {
    const { votes } = this.options;
    const colors = {
      sumptuously: '#FFE39C',
      good: '#6FCF97',
      satisfactorily: '#BC9CFF',
      disappointed: '#000000',
    };

    return `
      <g class="chart__sum-of-vote" fill=${colors[type]}>
        <text class="chart__number" text-anchor="middle" x="50%" y="49%">${votes[type]}</text>
        <text class="chart__text" text-anchor="middle" x="50%" y="67%">голосов</text>
      </g>
  `;
  }
}

export default Chart;
