import { useState, useContext } from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import PageContainer from '../components/containers/pageContainer/PageContainer';
import Splash from '../components/header/splash/Splash';
import HeadingBar from '../components/main/headingBar/HeadingBar';
import SearchBar from '../components/main/search/SearchBar';
import Loader from '../components/main/loader/Loader';
import Posters from '../components/main/posters/Posters';
import Pagination from '../components/main/pagination/Pagination';
import { SearchData } from '../models/models';
import { DisplayContext } from '../context/DisplayContext';
import endpoints from './endpoints';

const Home = () => {
	const { pageIndex, filmSearch } = useContext(DisplayContext);
	const { nowShowing, comingSoon, searchURL } = endpoints;
 
	const [ headerQuery, setHeaderQuery ] = useState(nowShowing);

	const { data, error } = useSWR<SearchData>(filmSearch ? searchURL + `&query=${filmSearch}&page=${pageIndex}`: headerQuery + `&page=${pageIndex}`, fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	return (
		<div className='bg-background text-mainText h-full py-10 px-6 font-mont min-w-min'>
			<PageContainer>
				<Splash />
				<SearchBar/>
				<HeadingBar comingSoon={comingSoon} nowShowing={nowShowing} setHeaderQuery={setHeaderQuery} />
				{data ? 
					<div className='my-4'>
						<Posters data={data}/>
						<Pagination page={data.page} total_pages={data.total_pages} />
					</div> : <Loader />}
			</PageContainer>
		</div>
	);
};

export default Home;