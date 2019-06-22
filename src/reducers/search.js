
let searchDataReducerDefaultState = "";

import { SET_SEARCH } from '../actions/search'
export default (state = searchDataReducerDefaultState, action) => {
switch (action.type) {
	case SET_SEARCH:
			return action.term
	default:
			return state;
	}
};