import { useContext } from 'react';
import SearchIconSVG from './images/SearchIconSVG';
import { DisplayContext } from '../../../context/DisplayContext';
import endpoints from '../../../pages/endpoints';

const SearchBar = () => {
	const { searchInput, setSearchInput, setHeaderText, setFilmSearch, setPageIndex, setEndpointQuery } = useContext(DisplayContext);
	const { nowShowing, searchURL } = endpoints;

	const handleSubmit = (e) => {
		e.preventDefault();
		setFilmSearch(searchInput);
		setPageIndex(1);
		if (searchInput) {
			setHeaderText('All Films');
			setEndpointQuery(searchURL);
		} else {
			setHeaderText('Now Showing');
			setEndpointQuery(nowShowing);
		}
	};
	
	return (
		<div className='text-center my-5 flex justify-center'>
			<form onSubmit={handleSubmit} className='border border-mainText py-2 px-2 flex w-11/12 rounded-xl'>
				<SearchIconSVG className='h-5 my-auto mr-2' />
				<input className="text-sm bg-background placeholder-headingText w-7/12" type='text' value={searchInput} placeholder="Search All Films..." onChange={(e) => setSearchInput(e.target.value)} />
				<input className='border-0 text-xs bg-attention ml-auto p-1 rounded-lg cursor-pointer' type='submit' value='Submit' />
			</form>
		</div>
	);
};
export default SearchBar;




