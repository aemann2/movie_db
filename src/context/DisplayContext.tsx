import React, { useState, createContext } from 'react';
import endpoints from '../components/endpoints/endpoints';
interface contextTypes {
	endpointQuery: string,
	setEndpointQuery: React.Dispatch<React.SetStateAction<string>>,
	searchInput: string,
	setSearchInput: React.Dispatch<React.SetStateAction<string>>,
	filmSearch: string,
	setFilmSearch: React.Dispatch<React.SetStateAction<string>>
	pageIndex: number,
	setPageIndex: React.Dispatch<React.SetStateAction<number>>,
	resetState: () => void;
}

export const DisplayContext = createContext<contextTypes>({} as contextTypes);

interface Props {
	children: React.ReactNode;
}

const DisplayContextProvider = (props: Props) => {
	const { nowShowing } = endpoints;
	const [ endpointQuery, setEndpointQuery ] = useState(nowShowing);
	const [ searchInput, setSearchInput ] = useState('');
	const [ filmSearch, setFilmSearch ] = useState('');
	const [ pageIndex, setPageIndex ] = useState(1);

	const resetState = () => {
		setSearchInput('');
		setFilmSearch('');
		setPageIndex(1);
	};

	const values = {
		endpointQuery,
		setEndpointQuery,
		pageIndex,
		setPageIndex,
		filmSearch,
		setFilmSearch,
		searchInput,
		setSearchInput,
		resetState
	};
	
	return (
		<DisplayContext.Provider value={values}>
			{props.children}
		</DisplayContext.Provider>
	);
};

export default DisplayContextProvider;