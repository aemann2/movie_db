import * as types from './paginationTypes';

export interface stateType {
	pageIndex: number
}

export const initialState = {
	pageIndex: 1
};

export function paginationReducer(state, action) {
	switch(action.type) {
	case types.INCREMENT_PAGE:
		return {
			...state,
			pageIndex: state.pageIndex + 1
		};
	case types.DECREMENT_PAGE:
		return {
			...state,
			pageIndex: state.pageIndex - 1
		};
	case types.RESET:
		return {
			...state,
			pageIndex: state.pageIndex = 1
		};
	default:
		return state;
	}
}