import useSWR from 'swr';
import { useParams } from 'react-router-dom';
import { fetcher } from '../utils/fetcher';
import PageContainer from '../components/containers/pageContainer/PageContainer';
import Loader from '../components/main/loader/Loader';
import ItemDisplay from '../components/main/itemDisplay/ItemDisplay';
import { ItemData } from '../models/models';

const Item = () => {
	const { id } = useParams();
	const url = `movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=credits`;

	const { data, error } = useSWR<ItemData>(url, fetcher);
	if (error) return (<div>"An error has occurred."</div>);
	
	return (
		<div className='bg-background text-mainText h-screen'>
			<PageContainer>
				{data ? <ItemDisplay data={data}/>
					: <Loader />
				}
			</PageContainer>
		</div>
	);
};

export default Item;