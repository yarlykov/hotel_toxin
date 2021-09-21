class Chart {
  constructor(selector, options) {
    this.root = selector;
    this.options = options;
    this.init();
  }

  init() {
    const { votes } = this.options;

    this.root.insertAdjacentHTML('afterbegin', Chart.getMainTemplate());
    this.sumOfAllVotes = votes.reduce((acc, item) => item.votesAmount + acc, 0);

    this.addChartElements();
    this.addLegendList();
    this.addSumOfVotes();
    this.addEventListeners();
  }

  addChartElements() {
    this.chartBody = this.root.querySelector('[data-id="body"]');
    const { votes } = this.options;
    const PI = 3.14;
    const radius = 15.9;
    const circumference = Math.ceil(2 * PI * radius);
    let segmentLength = circumference;

    votes.forEach((vote) => {
      const { votesAmount = 1 } = vote;
      const strokeDasharray = ((votesAmount * circumference) / this.sumOfAllVotes);
      segmentLength -= strokeDasharray;
      const strokeDashoffset = segmentLength * -1;
      this.chartBody.insertAdjacentHTML(
        'afterbegin',
        Chart.getChartBodyTemplate(vote.type, strokeDasharray, strokeDashoffset),
      );
    });

    votes.forEach((vote) => {
      this.chartBody.insertAdjacentHTML(
        'beforeend',
        Chart.getLinearGradientTemplate(vote.type, vote.firstStopColor, vote.secondStopColor),
      );
    });

    this.chartBody.insertAdjacentHTML('beforeend', Chart.getSumOfVotesTemplate());
  }

  addLegendList() {
    const { votes } = this.options;
    const legend = this.root.querySelector('[data-id="chart-legend"]');

    votes.forEach((vote) => {
      const { firstStopColor, secondStopColor, type } = vote;
      legend.insertAdjacentHTML('beforeend', Chart.getLegendItemTemplate(vote.type, vote.name));
      const item = legend.querySelector(`[data-id="item-point-${type}"]`);
      item.style.background = `-webkit-linear-gradient(${firstStopColor}, ${secondStopColor})`;
    });
  }

  addSumOfVotes() {
    this.sumOfVote = this.chartBody.querySelector('[data-id="sum-of-vote"]');
    this.sumOfVote.innerHTML = Chart.getSumOfVotesTemplate(this.sumOfAllVotes, '#919191');
  }

  addEventListeners() {
    this.root.addEventListener('mouseover', this.handleChartFocus.bind(this));
    this.root.addEventListener('mouseout', this.handleChartBlur.bind(this));
    this.root.addEventListener('focusin', this.handleChartFocus.bind(this));
    this.root.addEventListener('focusout', this.handleChartBlur.bind(this));
  }

  handleChartFocus({ target }) {
    const { type } = target.dataset;

    if (type) {
      const { votes } = this.options;
      votes.forEach((vote) => {
        if (vote.type === type) {
          const template = Chart.getSumOfVotesTemplate(vote.votesAmount, vote.firstStopColor);
          this.sumOfVote.innerHTML = template;
        }
      });

      const currentCircle = this.chartBody.querySelector(`[data-type=${type}]`);
      if (currentCircle) currentCircle.classList.add('chart__circle_focused');
    }
  }

  handleChartBlur({ target }) {
    const { type } = target.dataset;
    const currentCircle = this.chartBody.querySelector(`[data-type=${type}]`);
    this.sumOfVote.innerHTML = Chart.getSumOfVotesTemplate(this.sumOfAllVotes, '#919191');
    if (currentCircle) currentCircle.classList.remove('chart__circle_focused');
  }

  static getMainTemplate() {
    return `
      <div class="chart__doughnut">
        <svg class="chart__body" viewBox="0 0 34 30" data-id="body"></svg>
      </div>
      <div class="chart__legend" data-id="chart-legend">
        <ul class="chart__legend-list" data-id="chart-legend"></ul>
      </div>
    `;
  }

  static getLinearGradientTemplate(type = '', firstStopColor = '', secondStopColor = '') {
    return `
      <linearGradient id="${type}" gradientTransform="rotate(90)">
        <stop offset="0" stop-color=${firstStopColor}></stop>
        <stop offset="1" stop-color=${secondStopColor}></stop>
      </linearGradient>
    `;
  }

  static getChartBodyTemplate(type = '', strokeDasharray = 0, strokeDashoffset = 0) {
    let strokeWithIntervals = 0;
    if (strokeDasharray !== 0) {
      strokeWithIntervals = strokeDasharray - 1;
    }

    return `
      <circle class="chart__circle" r="15.9" cx="50%" cy="50%" stroke="url(#${type})"
      data-id="circle" data-type=${type} stroke-dasharray="${strokeWithIntervals} 100"
      stroke-dashoffset="${strokeDashoffset}">
      </circle>
    `;
  }

  static getSumOfVotesTemplate(numberOfVotes = 0, textFillColor = '#919191') {
    return `
      <g class="chart__sum-of-vote" fill=${textFillColor} data-id="sum-of-vote">
        <text class="chart__number" text-anchor="middle" x="50%" y="49%">${numberOfVotes}</text>
        <text class="chart__text" text-anchor="middle" x="50%" y="67%">голосов</text>
      </g>
    `;
  }

  static getLegendItemTemplate(type = '', name = '') {
    return `
      <li class="chart__legend-item" data-id="legend-item" data-type=${type} tabindex="0">
        ${name}
        <div class="chart__legend-item-point" data-id="item-point-${type}"></div>
      </li>
    `;
  }
}

export default Chart;
