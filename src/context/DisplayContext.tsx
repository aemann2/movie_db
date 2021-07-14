import React, { useState, createContext } from 'react';
import endpoints from '../pages/endpoints';
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
	const [ headerText, setHeaderText ] = useState('Now Showing');
	const [ endpointQuery, setEndpointQuery ] = useState(nowShowing);
	const [ searchInput, setSearchInput ] = useState('');
	const [ filmSearch, setFilmSearch ] = useState('');
	const [ pageIndex, setPageIndex ] = useState(1);

	const values = {
		headerText,
		setHeaderText,
		endpointQuery,
		setEndpointQuery,
		pageIndex,
		setPageIndex,
		filmSearch,
		setFilmSearch,
		searchInput,
		setSearchInput
	};
	
	return (
		<DisplayContext.Provider value={values}>
			{props.children}
		</DisplayContext.Provider>
	);
};

export default DisplayContextProvider;