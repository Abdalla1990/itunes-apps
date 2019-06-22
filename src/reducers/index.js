import { combineReducers } from 'redux';
import apps_Data from './appsData';
import search from './search';

export default combineReducers({
  appsData: apps_Data, 
  search,
});