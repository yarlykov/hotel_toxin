// function storage(key, data = null) {
//   if (!data) {
//     return JSON.parse(localStorage.getItem(key));
//   }
//   localStorage.setItem(JSON.stringify(data));
// }

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
