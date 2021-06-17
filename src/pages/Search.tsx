import React from 'react';
import useSWR from "swr";
import Navbar from '../components/header/Navbar';
import { fetcher } from "../utils/fetcher";
import { Results } from './Home'

const Search:React.FC = () => {
	const url = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=Lord%20of%20the%20Rings&page=1&include_adult=false&region=US&year&primary_release_year`;

	const { data, error } = useSWR<Results>(url, fetcher);
  if (error) return (<div>"An error has occurred."</div>);
  if (!data) return (<div>"Loading..."</div>);

	return (
		<div>
			<Navbar />
			{data.results.map((item) => (
          <div key={item.id}>{item.title}</div>
      ))}
		</div>
	)
}

export default Search;