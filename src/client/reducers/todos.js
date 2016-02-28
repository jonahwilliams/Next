import {
  ADD_TODO,
  TOGGLE_TODO,
} from '../constants/actionTypes';

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
};

const todo = (state, action) => {
  switch(action.type) {
  case ADD_TODO:
    return {
      id: action.payload.id,
      text: action.payload.text,
      completed: false
    };
  case TOGGLE_TODO:
  default:
    return state;
  }
};

const todos = (state, action) => {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        todo(undefined, action)
      ];
    case TOGGLE_TODO:
      return state.map(t => todo(t, action));
    default:
      return state;
  }
};

export default todos;
