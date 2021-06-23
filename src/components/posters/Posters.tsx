import { Data } from '../../pages/Home';
import PosterCard from './components/PosterCard';

interface IProps {
	data: Data
}

const Posters = ({ data }:IProps) => {
	return (
		<div className='flex flex-wrap gap-x-4'>
			{data.results.map(({ id, poster_path, title, release_date, vote_average }) => (
				<div key={id}>
					<PosterCard id={id} poster_path={poster_path} title={title} release_date={release_date} vote_average={vote_average} />
				</div>
			))}
		</div>
	);
};

export default Posters;
