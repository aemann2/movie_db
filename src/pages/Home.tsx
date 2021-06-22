import React, { useState } from 'react';
import Navbar from '../components/header/navbar/Navbar';
import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';
import Loader from '../components/loader/Loader';
import Pagination from '../components/pagination/Pagination';
import PosterCard from '../components/posterCard/PosterCard';

export type Results = {
	id: number,
	poster_path: string,
	title: string,
	release_date: string,
	vote_average: number
}
export interface Data {
	// results: an array of objects with the following properties
  results: Results[];
	page: number,
	total_pages: number
}

const Home = () => {
	const [pageIndex, setPageIndex] = useState(1);

	const url = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

	const { data, error } = useSWR<Data>(url, fetcher);
	if (error) return (<div>"An error has occurred."</div>);

	return (
		<div>
			<Navbar />
			<h1 className='mt-4 text-center text-3xl'>Now Showing</h1>
			{data ? 
				<div className='my-4 px-3'>
					<div>
						{data.results.map(({id, poster_path, title, release_date, vote_average}) => (
							<div key={id}>
								<PosterCard id={id} poster_path={poster_path} title={title} release_date={release_date} vote_average={vote_average} />
							</div>
						))}
					</div>
					<Pagination page={data.page} total_pages={data.total_pages} pageIndex={pageIndex} setPageIndex={setPageIndex} />
				</div> : <Loader />}
		</div>
	);
};

export default Home;