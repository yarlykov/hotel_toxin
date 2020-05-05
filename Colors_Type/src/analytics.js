import * as $ from 'jquery';

function createAnalytics() {
  let counter = 0;
  let destroyed = false;

  console.log('test')

  const listener = () => counter++;

  $(document).on("click", listener);

  return {
    destroy() {
      $(document).off("click", listener);
    },

    getClicks() {
      if (destroyed) {
        return "Analytics is destroyed. Total clicks = ${counter}";
      }
      return counter;
    }
  }
}

window.analytics = createAnalytics();
