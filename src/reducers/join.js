import { handleActions } from 'redux-actions';
import { combineReducer } from 'redux';

const joins = handleActions({
  ['joins/create'](state, action) {
    const text = action.payload;
    const newTodo = { text, };
    return { ...state, list: [newTodo, ...state.list], };
  }
}, {
  list: [],
  loading: false,
});

export default joins;
