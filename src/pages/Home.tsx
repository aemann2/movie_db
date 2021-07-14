import { useContext } from 'react';
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

const Home = () => {
	const { pageIndex, filmSearch, endpointQuery } = useContext(DisplayContext);

	const { data, error } = useSWR<SearchData>(
		filmSearch ? endpointQuery + `&query=${filmSearch}&page=${pageIndex}`: 
			endpointQuery + `&page=${pageIndex}`, 
		fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	return (
		<div className='bg-background text-mainText h-full py-10 px-6 font-mont min-w-min'>
			<PageContainer>
				<Splash />
				<SearchBar/>
				<HeadingBar />
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