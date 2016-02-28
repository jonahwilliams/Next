import { combineReducers } from 'redux';
import { todoApp } from './todoApp';

export const app = combineReducers(todoApp);
