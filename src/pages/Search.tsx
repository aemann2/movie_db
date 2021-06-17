import React, {useState, useEffect} from 'react';
import axiosGet from '../utils/axiosGet';
import Navbar from '../components/header/Navbar';

const Search:React.FC = () => {
	const [results, setResults] = useState({});
	const endpoint = `search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=Lord%20of%20the%20Rings&page=1&include_adult=false&region=US&year&primary_release_year`;

	useEffect(():void => {
		const fetchData = async ():Promise<void> => {
			const res = await axiosGet(endpoint);
			setResults(res.data);
		};
		fetchData();
	}, [endpoint])

	console.log(results)

	return (
		<div>
			<Navbar />
			<h1>Search</h1>
		</div>
	)
}

export default Search;