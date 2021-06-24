import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { fetcher } from '../utils/fetcher';
import Navbar from '../components/header/navbar/Navbar';
import Loader from '../components/loader/Loader';
import ItemDisplay from '../components/itemDisplay/ItemDisplay';
export interface Results {
		id: number,
		backdrop_path: string,
		title: string,
		genres: [
			{name:string}
		],
		release_date: string,
		runtime: number,
		vote_average: number,
		overview: string,
		production_companies: [
			{name: string}
		],
		credits: {
			crew: [
				{job: string}
			]
		}
}

const Item = () => {
	const { id } = useParams();
	const url = `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`;

	const { data, error } = useSWR<Results>(url, fetcher);
	if (error) return (<div>"An error has occurred."</div>);
	
	return (
		<div>
			<Navbar />
			{data ? <ItemDisplay id={data.id} backdrop_path={data.backdrop_path} title={data.title} release_date={data.release_date} runtime={data.runtime} vote_average={data.vote_average} overview={data.overview} genres={data.genres} production_companies={data.production_companies} credits={data.credits}/>
				: <Loader />
			}
		</div>
	);
};

export default Item;