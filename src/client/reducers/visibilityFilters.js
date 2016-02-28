import {
  SET_FILTER,
  visibilityFilters
} from '../constants/actionTypes';

const visibilityFilter = (state = visibilityFilters.SHOW_ALL, action) => {
  switch(action.type) {
  case SET_FILTER:
    return action.filter;
  default:
    return state;
  }
};

export default visibilityFilter;
