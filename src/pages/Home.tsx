import React, { useState } from 'react';
import Navbar from '../components/header/Navbar';
import useSWR from "swr";
import { fetcher } from "../utils/fetcher";

export interface Results {
	// results: an array of objects with the following properties
  results: {
		id: number,
		title: string,
	}[];
	page: number,
	total_pages: number
};

const Home = () => {
	const [pageIndex, setPageIndex] = useState(1);

  const url = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${pageIndex}&region=US`;

  const { data, error } = useSWR<Results>(url, fetcher);
  if (error) return (<div>"An error has occurred."</div>);
  if (!data) return (<div>"Loading..."</div>);

	return (
		<div>
			<Navbar />
			<h1 className='mt-4 text-center text-3xl'>Now Showing</h1>
			<div className='my-4 px-3'>
				<div>
					{data.results.map(({id, title}) => (
						<div key={id}>{title}</div>
					))}
					<div className='mt-2 flex justify-center'>
						<button className='border w-20 py-1 px-2 bg-gray-200 mr-2'
							onClick={() =>
								setPageIndex(data.page > 1 ? pageIndex - 1 : pageIndex - 0)
							}
						>
							Previous
						</button>
						<button className='border w-20 py-1 px-2 bg-gray-200'
							onClick={() =>
								setPageIndex(
									data.page < data.total_pages ? pageIndex + 1 : pageIndex + 0
								)
							}
						>
							Next
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home;