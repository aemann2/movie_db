import React, { useState, createContext } from 'react';
import { SearchData } from '../models/models';
export interface contextTypes {
	setResults: React.Dispatch<SearchData[]>,
	results: SearchData[],
	filmList: string,
	// eslint-disable-next-line no-unused-vars
	changeList: (list: string) => void;
}

// for some reason this line doesn't work when I go to consume the context items...no idea why it won't work
// export const DisplayContext = createContext<contextTypes | null>(null);
export const DisplayContext = createContext<any | null>(null);

interface Props {
	children: React.ReactNode;
}

const DisplayContextProvider = (props: Props) => {
	const [ filmList, setFilmList ] = useState('Now Showing');
	const [ pageIndex, setPageIndex ] = useState(1);

	const changeList = (list: string):void => {
		setFilmList(list);
	};

	const values = {
		filmList,
		changeList,
		pageIndex,
		setPageIndex
	};
	
	return (
		<DisplayContext.Provider value={values}>
			{props.children}
		</DisplayContext.Provider>
	);
};

export default DisplayContextProvider;