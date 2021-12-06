function createStore(rootReducer, initialState = {}) {
  let state = rootReducer({ ...initialState }, { type: '__INIT__' });
  const subscribers = [];

  return {
    dispatchEvent(action) {
      state = rootReducer(state, action);
      subscribers.forEach((fn) => fn(state));
    },

    subscribe(fn) {
      subscribers.push(fn);
    },

    getState() {
      return state;
    },
  };
}

export default createStore;
