import React, {useState, useEffect} from 'react';
import axiosGet from '../utils/axiosGet';

const Home = () => {
	const [results, setResults] = useState({});
	const endpoint = `movie/now_playing?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&region=US`;

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
			<h1>Home</h1>
		</div>
	)
}

export default Home;