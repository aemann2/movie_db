import React, {useState} from 'react';
import useSWR from 'swr';
import Navbar from '../components/header/navbar/Navbar';
import { fetcher } from '../utils/fetcher';
import { Data } from './Home';
import Loader from '../components/loader/Loader';
import SearchBar from '../components/search/SearchBar';

const Search= () => {
	const [search, setSearch] = useState('');
	
	const url = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=1&include_adult=false&region=US&year&primary_release_year`;
	
	const { data, error } = useSWR<Data>(url, fetcher);
	if (error) {
		console.log(error);	
	}

	return (
		<div>
			<Navbar />
			<SearchBar setSearch={setSearch}/>
			{data ? data.results.map((item) => (
				<div key={item.id}>{item.title}</div>
			)) : <Loader />}
		</div>
	);
};

export default Search;