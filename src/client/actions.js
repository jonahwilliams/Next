import {
  ADD_TODO,
  SET_FILTER,
  TOGGLE_TODO
} from './constants/actionTypes';
let nextTodoId = 0;

export const addTodo = (text) => {
  return {
    type: ADD_TODO,
    payload: { id: nextTodoId++, text }
  };
};

export const setVisibilityFilter = (filter) => {
  return {
    type: SET_FILTER,
    payload: { filter }
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
};
