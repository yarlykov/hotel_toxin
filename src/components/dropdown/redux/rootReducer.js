import { count } from '../constants';

function rootReducer(state = {}, action) {
  const { id, value } = action;
  switch (action.type) {
    case count.INIT:
      return { ...state, [id]: value };
    case count.INCREMENT:
      return { ...state, [id]: value + 1 };
    case count.DECREMENT:
      return { ...state, [id]: value - 1 };
    default:
      return state;
  }
}

export default rootReducer;
