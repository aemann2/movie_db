import React, { useContext, createContext, useReducer } from 'react';
import { paginationReducer, initialState } from './paginationReducer';
interface stateTypes {
	pageIndex: number
}

interface dispatchTypes {
	type: 'INCREMENT_PAGE' | 'DECREMENT_PAGE' | 'RESET'
}

interface contextType {
	state: stateTypes,
	dispatch: React.Dispatch<dispatchTypes>
}

const PaginationContext = createContext({} as contextType);

export const PaginationProvider = props => {
	const { children } = props;
	const [ state, dispatch ] = useReducer(paginationReducer, initialState);
	
	return (
		<PaginationContext.Provider value={{ state, dispatch }}>
			{children}
		</PaginationContext.Provider>
	); 
};

// This is just a utility function that makes it easier to consume our context in child components.
export function usePaginationState() {
	return useContext(PaginationContext);
}