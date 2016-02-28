import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_FILTER,
  visibilityFilters } from '../constants/actionTypes';

const initialState = {
  visibilityFilter: visibilityFilters.SHOW_ALL,
  todos: []
};

export function todoApp(state = initialState, action) {
  switch(action.type) {
    case ADD_TODO: {
      const { description, date } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            description,
            date,
            complete: false
          }
        ]
      };
    }
    case DELETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, id),
          ...state.todos.slice(id)
        ]
      };
    }
    case COMPLETE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        todos: [
          ...state.todos.slice(0, id),
             { ...state.todos[id], done: true }
          ...state.todos.slice(id)
        ]
      };
    }
    case SET_FILTER: {
      const { filter } = action.payload;
      return {
        ...state,
        visibilityFilter: filter
      };
    }
    default:
      return state;
  }
}
