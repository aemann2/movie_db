import { useState } from 'react';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import Navbar from '../components/header/navbar/Navbar';
import Splash from '../components/header/splash/Splash';
import HeadingBar from '../components/main/headingBar/HeadingBar';
import SearchBar from '../components/main/search/SearchBar';
import Loader from '../components/main/loader/Loader';
import Posters from '../components/main/posters/Posters';
import Pagination from '../components/main/pagination/Pagination';
import Footer from '../components/footer/Footer';
export interface Data {
	// results: an array of objects with the following properties
	id: number,
	poster_path: string,
	title: string,
	release_date: string,
	vote_average: number 
	page: number,
	total_pages: number
}

const Home = () => {
	const [ pageIndex, setPageIndex ] = useState(1);
	const [ search, setSearch ] = useState('');

	const url = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

	const searchURL = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}&page=${pageIndex}&include_adult=false&region=US&year&primary_release_year`;

	const { data, error } = useSWR<Data>(search ? searchURL: url, fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	return (
		<div className='bg-background text-mainText h-full py-10 px-6 font-mont min-w-min'>
			<Navbar />
			<Splash />
			<SearchBar setSearch={setSearch} />
			<HeadingBar />
			{data ? 
				<div className='my-4'>
					<Posters data={data}/>
					<Pagination page={data.page} total_pages={data.total_pages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
					<Footer />
				</div> : <Loader />}
		</div>
	);
};

export default Home;