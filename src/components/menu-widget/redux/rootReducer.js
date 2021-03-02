const initialThemeState = {
  value: 'day',
};

function rootReducer(state = initialThemeState, action) {
  if (action.type === 'CHANGE_THEME') {
    return { ...state, value: action.payload };
  }
  return state;
}

export default rootReducer;
