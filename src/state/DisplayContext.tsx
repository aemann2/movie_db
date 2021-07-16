import React, { useState, createContext } from 'react';
import endpoints from '../components/endpoints/endpoints';

interface contextTypes {
	endpointQuery: string,
	setEndpointQuery: React.Dispatch<React.SetStateAction<string>>,
	searchInput: string,
	setSearchInput: React.Dispatch<React.SetStateAction<string>>,
	filmSearch: string,
	setFilmSearch: React.Dispatch<React.SetStateAction<string>>
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

	const resetState = () => {
		setSearchInput('');
		setFilmSearch('');
	};

	const values = {
		endpointQuery,
		setEndpointQuery,
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