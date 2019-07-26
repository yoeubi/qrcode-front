import { combineReducers } from 'redux';
import { listReducer, ListState } from './list';

export interface State {
  list: ListState;
}

export default combineReducers<State>({
  list: listReducer,
});
