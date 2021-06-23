import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { fetcher } from '../utils/fetcher';
import Navbar from '../components/header/navbar/Navbar';
import Loader from '../components/loader/Loader';
interface Results {
		id: number,
		title: string,
}

const Item = () => {
	const { id } = useParams();
	const url = `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`;

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
	);
};

export default Item;