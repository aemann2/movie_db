import { Link } from 'react-router-dom';
import { truncateString } from '../../../../../../utils/helpers';
import IMDBSVG from './images/IMDBSVG';
import { SearchData } from '../../../../../../models/models';

interface IProps {
	data: SearchData
}

const PosterCard = ({ data:{ id, poster_path, title, release_date, vote_average } }:IProps) => {

	return (
		<div className='mb-8 w-32 font-bitter'>
			<Link to={`/${id}`}>
				<img className='w-28 mb-2' src={`https://image.tmdb.org/t/p/w154/${poster_path}`} alt="" />
				<h2 className='font-bitter font-bold text-headingText'>{truncateString(title, 30)}</h2>
			</Link>
			<p className='font-light text-sm mt-2'>Release: {release_date}</p>
			<div className='flex -mt-2'>
				<IMDBSVG className={'w-14'}/>
				<span className='ml-4 self-center text-headingText'>{vote_average}</span>
			</div>
		</div>
	);
};

export default PosterCard;