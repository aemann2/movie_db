import { useState } from 'react';
import useSWR from 'swr';
import Navbar from '../components/header/navbar/Navbar';
import { fetcher } from '../utils/fetcher';
import { Data } from './Home';
import SearchBar from '../components/search/SearchBar';
import Posters from '../components/posters/Posters';
import Pagination from '../components/pagination/Pagination';

const Search= () => {
	const [ search, setSearch ] = useState('');
	const [ pageIndex, setPageIndex ] = useState(1);
	
	const url = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${pageIndex}&include_adult=false&region=US&year&primary_release_year`;
	
	// conditionally fetching the data depending on whether there's a search
	const { data, error } = useSWR<Data>(search ? url : null, fetcher);
	if (error) {
		console.log(error);	
	}

	return (
		<div>
			<Navbar />
			<SearchBar setSearch={setSearch}/>
			{data ? 
				<div className='my-4 px-3'>
					<Posters data={data}/>
					<Pagination page={data.page} total_pages={data.total_pages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
				</div> : null}
		</div>
	);
};

export default Search;