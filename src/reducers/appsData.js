
let appsDataReducerDefaultState = [];

import { POST_LIST } from '../actions/appsData'
export default (state = appsDataReducerDefaultState, action) => {
	switch (action.type) {
	case POST_LIST:
		return {...action.apps}
	default:
		return state;
	}
};