import React from 'react';
import useSWR from "swr";
import { fetcher } from "../utils/fetcher"
import Navbar from '../components/header/navbar/Navbar';
import Loader from '../components/loader/Loader';

interface Results {
		id: number,
		title: string,
};

const Item = () => {
	const url = `movie/121?api_key=${process.env.REACT_APP_API_KEY}&&language=en-US&append_to_response`;

	const { data, error } = useSWR<Results>(url, fetcher);
  if (error) return (<div>"An error has occurred."</div>);
  if (!data) return (<div>"Loading..."</div>);

	return (
		<div>
			<Navbar />
			{data ? 
				<div key={data.id}>{data.title}</div> 
				: <Loader />
			}
		</div>
	)
}

export default Item;