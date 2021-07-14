import { useState } from 'react';
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

const Home = () => {
	const [ pageIndex, setPageIndex ] = useState(1);
	const [ search, setSearch ] = useState('');

	const nowShowing = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

	const comingSoon = `movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

	const [ headerQuery, setHeaderQuery ] = useState(nowShowing);

	const searchURL = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${pageIndex}&include_adult=false&region=US&year&primary_release_year`;

	const { data, error } = useSWR<SearchData>(search ? searchURL: headerQuery, fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	return (
		<div className='bg-background text-mainText h-full py-10 px-6 font-mont min-w-min'>
			<PageContainer>
				<Splash />
				<SearchBar setSearch={setSearch} />
				<HeadingBar comingSoon={comingSoon} nowShowing={nowShowing} setHeaderQuery={setHeaderQuery} />
				{data ? 
					<div className='my-4'>
						<Posters data={data}/>
						<Pagination page={data.page} total_pages={data.total_pages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
					</div> : <Loader />}
			</PageContainer>
		</div>
	);
};

export default Home;