import { useContext } from 'react';
import useSWR from 'swr';
import { fetcher } from '../../../utils/fetcher';
import Splash from '../../header/splash/Splash';
import HeadingBar from './components/HeadingBar';
import SearchBar from './components/search/SearchBar';
import Loader from '../loader/Loader';
import Posters from './components/posters/Posters';
import Pagination from './components/Pagination';
import { SearchData } from '../../../models/models';
import { DisplayContext } from '../../../context/DisplayContext';


const HomeMain = () => {
	const { pageIndex, filmSearch, endpointQuery } = useContext(DisplayContext);

	const { data, error } = useSWR<SearchData>(
		filmSearch ? endpointQuery + `&query=${filmSearch}&page=${pageIndex}`: 
			endpointQuery + `&page=${pageIndex}`, 
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
					<Pagination page={data.page} total_pages={data.total_pages} />
				</div> : <Loader />}
		</>
	);
};

export default HomeMain;