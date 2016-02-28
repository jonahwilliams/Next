import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';

export const app = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
