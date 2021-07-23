import { Link } from 'react-router-dom';
import { truncateString } from '../../../../../../utils/helpers';
import IMDBSVG from './images/IMDBSVG';
import { SearchData } from '../../../../../../models/models';
import { srcSetUtils } from '../../../../../../utils/helpers';

interface IProps {
	data: SearchData
}

const PosterCard = ({ data:{ id, poster_path, title, release_date, vote_average } }:IProps) => {
	const { getSrcSet, posterVariants } = srcSetUtils;
	const src = getSrcSet(posterVariants, poster_path);

	return (
		<div className='mb-8 w-full font-bitter'>
			<Link to={`/${id}`}>
				{
					poster_path ? <img className='mb-2' srcSet={src} src={posterVariants[0].url} alt="" /> : <p className='w-32 sm:w-48 h-44 sm:h-80 text-2xl text-center flex items-center'>No image available</p>
				}
				<h2 className='font-bitter font-bold sm:text-2xl text-headingText'>{truncateString(title, 30)}</h2>
			</Link>
			<p className='font-light text-sm sm:text-lg mt-2'>Release: {release_date}</p>
			<div className='flex -mt-2'>
				<IMDBSVG className={'w-14 sm:w-20'}/>
				<span className='ml-4 sm:text-2xl self-center text-headingText'>{vote_average}</span>
			</div>
		</div>
	);
};

export default PosterCard;