import React, {useState, useEffect} from 'react';
import axiosGet from '../utils/axiosGet';
import Navbar from '../components/header/Navbar';

const Item:React.FC = () => {
	const [results, setResults] = useState({});
	const endpoint = `movie/121?api_key=${process.env.REACT_APP_API_KEY}&&language=en-US&append_to_response`;

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
			<h1>Item</h1>
		</div>
	)
}

export default Item;