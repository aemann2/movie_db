import { useContext } from 'react';
import SearchIconSVG from './images/SearchIconSVG';
import { FilmsContext } from '../../../../../state/films/filmsProvider';
import { paginationTypes } from '../../../../../state/pagination';
import { usePaginationState } from '../../../../../state/pagination/paginationProvider';
import endpoints from '../../../../endpoints/endpoints';

const SearchBar = () => {
	const { searchInput, setSearchInput, setFilmSearch, setEndpointQuery } = useContext(FilmsContext);
	const { dispatch: paginationDispatch } = usePaginationState();
	const { nowShowing, searchURL } = endpoints;

	const handleSubmit = (e) => {
		e.preventDefault();
		setFilmSearch(searchInput);
		paginationDispatch({ type: paginationTypes.RESET });
		if (searchInput) {
			setEndpointQuery(searchURL);
		} else {
			setEndpointQuery(nowShowing);
		}
	};
	
	return (
		<div className='text-center my-5 flex justify-center'>
			<form onSubmit={handleSubmit} className='border border-mainText py-2 px-2 flex w-11/12 rounded-xl'>
				<SearchIconSVG className='h-5 sm:h-10 my-auto mr-2' />
				<input className="text-sm sm:text-xl bg-background placeholder-headingText w-9/12 pl-2" type='text' value={searchInput} placeholder="Search All Films..." onChange={(e) => setSearchInput(e.target.value)} />
				<input className='border-0 text-xs sm:text-lg bg-attention ml-auto p-1 rounded-lg cursor-pointer' type='submit' value='Submit' />
			</form>
		</div>
	);
};
export default SearchBar;




