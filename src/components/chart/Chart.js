class Chart {
  constructor(selector) {
    this.root = selector;
    this.init();
  }

  init() {
    const { votes } = this.root.dataset;

    try {
      this.votes = JSON.parse(votes);
    } catch (e) {
      throw new Error('Incorrect options passed to the Chart class', e);
    }

    this.root.insertAdjacentHTML('afterbegin', Chart.getMainTemplate());
    this.sumOfAllVotes = this.votes.reduce((acc, item) => item.votesAmount + acc, 0);

    this.addChartElements();
    this.addLegendList();
    this.addSumOfVotes();
    this.addEventListeners();
  }

  addChartElements() {
    this.chartBody = this.root.querySelector('.js-chart-body');
    const PI = 3.14;
    const radius = 15.9;
    const circumference = Math.ceil(2 * PI * radius);
    let segmentLength = circumference;

    this.votes.forEach((vote) => {
      const { votesAmount = 1 } = vote;
      const strokeDasharray = ((votesAmount * circumference) / this.sumOfAllVotes);
      segmentLength -= strokeDasharray;
      const strokeDashoffset = segmentLength * -1;
      this.chartBody.insertAdjacentHTML(
        'afterbegin',
        Chart.getChartBodyTemplate(vote.id, strokeDasharray, strokeDashoffset),
      );
    });

    this.votes.forEach((vote) => {
      this.chartBody.insertAdjacentHTML(
        'beforeend',
        Chart.getLinearGradientTemplate(vote.id, vote.firstStopColor, vote.secondStopColor),
      );
    });

    this.chartBody.insertAdjacentHTML('beforeend', Chart.getSumOfVotesTemplate());
  }

  addLegendList() {
    const legend = this.root.querySelector('.js-chart-legend');

    this.votes.forEach((vote) => {
      const { firstStopColor, secondStopColor, id } = vote;
      legend.insertAdjacentHTML('beforeend', Chart.getLegendItemTemplate(vote.id, vote.name));
      const item = legend.querySelector(`[data-id="item-point-${id}"]`);
      item.style.background = `-webkit-linear-gradient(${firstStopColor}, ${secondStopColor})`;
    });
  }

  addSumOfVotes() {
    this.sumOfVote = this.chartBody.querySelector('.js-chart__sum-of-vote');
    this.sumOfVote.innerHTML = Chart.getSumOfVotesTemplate(this.sumOfAllVotes, '#919191');
  }

  addEventListeners() {
    this.root.addEventListener('mouseover', this.handleChartFocus.bind(this));
    this.root.addEventListener('mouseout', this.handleChartBlur.bind(this));
    this.root.addEventListener('focusin', this.handleChartFocus.bind(this));
    this.root.addEventListener('focusout', this.handleChartBlur.bind(this));
  }

  handleChartFocus({ target }) {
    const { id } = target.dataset;

    if (id) {
      this.votes.forEach((vote) => {
        if (vote.id === id) {
          const template = Chart.getSumOfVotesTemplate(vote.votesAmount, vote.firstStopColor);
          this.sumOfVote.innerHTML = template;
        }
      });

      const currentCircle = this.chartBody.querySelector(`[data-id=${id}]`);
      if (currentCircle) currentCircle.classList.add('chart__circle_focused');
    }
  }

  handleChartBlur({ target }) {
    const { id } = target.dataset;
    const currentCircle = this.chartBody.querySelector(`[data-id=${id}]`);
    this.sumOfVote.innerHTML = Chart.getSumOfVotesTemplate(this.sumOfAllVotes, '#919191');
    if (currentCircle) currentCircle.classList.remove('chart__circle_focused');
  }

  static getMainTemplate() {
    return `
      <div class="chart__doughnut">
        <svg class="chart__body js-chart-body" viewBox="0 0 34 30"></svg>
      </div>
      <div class="chart__legend js-chart-legend" >
        <ul class="chart__legend-list"></ul>
      </div>
    `;
  }

  static getLinearGradientTemplate(id = '', firstStopColor = '', secondStopColor = '') {
    return `
      <linearGradient id="${id}" gradientTransform="rotate(90)">
        <stop offset="0" stop-color=${firstStopColor}></stop>
        <stop offset="1" stop-color=${secondStopColor}></stop>
      </linearGradient>
    `;
  }

  static getChartBodyTemplate(id = '', strokeDasharray = 0, strokeDashoffset = 0) {
    let strokeWithIntervals = 0;
    if (strokeDasharray !== 0) {
      strokeWithIntervals = strokeDasharray - 1;
    }

    return `
      <circle class="chart__circle" r="15.9" cx="50%" cy="50%" stroke="url(#${id})"
      data-id=${id} stroke-dasharray="${strokeWithIntervals} 100"
      stroke-dashoffset="${strokeDashoffset}">
      </circle>
    `;
  }

  static getSumOfVotesTemplate(numberOfVotes = 0, textFillColor = '#919191') {
    return `
      <g class="chart__sum-of-vote js-chart__sum-of-vote" fill=${textFillColor}>
        <text class="chart__number" text-anchor="middle" x="50%" y="49%">${numberOfVotes}</text>
        <text class="chart__text" text-anchor="middle" x="50%" y="67%">голосов</text>
      </g>
    `;
  }

  static getLegendItemTemplate(id = '', name = '') {
    return `
      <li class="chart__legend-item" data-id=${id} tabindex="0">
        ${name}
        <div class="chart__legend-item-point" data-id="item-point-${id}"></div>
      </li>
    `;
  }
}

export default Chart;
