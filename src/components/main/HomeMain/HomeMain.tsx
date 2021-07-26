import { useContext } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../utils/fetcher';
import Splash from '../../header/splash/Splash';
import HeadingBar from './components/HeadingBar';
import SearchBar from './components/searchBar/SearchBar';
import Loader from '../loader/Loader';
import Posters from './components/posters/Posters';
import Pagination from './components/Pagination';
import { SearchData } from '../../../models/models';
import { FilmsContext } from '../../../state/films/filmsProvider';
import { usePaginationState } from '../../../state/pagination/paginationProvider';


const HomeMain = () => {
	const { filmSearch, endpointQuery } = useContext(FilmsContext);
	const { state: paginationState } = usePaginationState();

	const { data, error } = useSWR<SearchData>(
		filmSearch ? endpointQuery + `&query=${filmSearch}&page=${paginationState.pageIndex}`: 
			endpointQuery + `&page=${paginationState.pageIndex}`, 
		fetcher);
	if (error) return (<div>"An error has occurred."</div>);
	
	return (
		<>
			<Splash />
			<SearchBar/>
			<HeadingBar />
			{data ? 
				<div className='my-4'>
					<Posters data={data}/>
					{data.total_pages && <Pagination page={data.page} total_pages={data.total_pages} />
					}
				</div> : <Loader />}
		</>
	);
};

export default HomeMain;
