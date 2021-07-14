import React, { useState, createContext } from 'react';
import endpoints from '../components/endpoints/endpoints';
// interface contextTypes {
// 	filmList: string,
// 	setFilmList: React.Dispatch<React.SetStateAction<string>>,
// 	pageIndex: number,
// 	setPageIndex: React.Dispatch<React.SetStateAction<number>>,
// }

// for some reason this line doesn't work when I go to consume the context items...no idea why it won't work
// export const DisplayContext = createContext<contextTypes | null>(null);
export const DisplayContext = createContext<any | null>(null);

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