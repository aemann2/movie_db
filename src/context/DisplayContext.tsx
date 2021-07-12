import React, { useState, createContext } from 'react';
import useSWR from 'swr';
import { SearchData } from '../models/models';

const initialState = {
	id: NaN,
	poster_path: 'string',
	title: '',
	release_date: '',
	vote_average: NaN,
	page: NaN,
	total_pages: NaN
};

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
	const [ results, setResults ] = useState<SearchData[]>([ initialState ]);

	const changeList = (list: string):void => {
		setFilmList(list);
	};

	const values = {
		results,
		setResults,
		filmList,
		changeList,
	};
	
	return (
		<DisplayContext.Provider value={values}>
			{props.children}
		</DisplayContext.Provider>
	);
};

export default DisplayContextProvider;