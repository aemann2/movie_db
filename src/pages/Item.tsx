import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { fetcher } from '../utils/fetcher';
import Navbar from '../components/header/navbar/Navbar';
import Loader from '../components/main/loader/Loader';
import ItemDisplay from '../components/main/itemDisplay/ItemDisplay';
export interface ItemResults {
		id: number,
		backdrop_path: string,
		title: string,
		genres: [],
		release_date: string,
		runtime: number,
		vote_average: number,
		overview: string,
		production_companies: [],
		credits: {}
}

const Item = () => {
	const { id } = useParams();
	const url = `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`;

	const { data, error } = useSWR<ItemResults>(url, fetcher);
	if (error) return (<div>"An error has occurred."</div>);
	
	return (
		<div className='bg-background text-mainText h-screen'>
			<Navbar />
			{data ? <ItemDisplay data={data}/>
				: <Loader />
			}
		</div>
	);
};

export default Item;