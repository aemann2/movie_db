import { Link } from 'react-router-dom';
import { truncateString } from '../../../../../../utils/helpers';
import IMDBSVG from './images/IMDBSVG';
import { SearchData } from '../../../../../../models/models';
import { addDecimal } from '../../../../../../utils/helpers';
import { motion } from 'framer-motion';

interface IProps {
	data: SearchData
}

const hoverVariants = {
	hover: {
		scale: 1.05,
		opacity: 0.7,
		transition: { ease: 'easeInOut' }
	},
};

const PosterCard = ({ data:{ id, poster_path, title, release_date, vote_average } }:IProps) => {

	return (
		<motion.div className='mb-8 w-full font-bitter' variants={hoverVariants} whileHover='hover'>
			<Link to={`/${id}`}>
				{
					poster_path ?  
						<picture>
							<source media="(max-width: 1019px)" srcSet={`https://image.tmdb.org/t/p/w154/${poster_path}`}></source>
							<source media="(min-width: 1020px)" srcSet={`https://image.tmdb.org/t/p/w300/${poster_path}`}></source>
							<img className='mb-2' src={`https://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
						</picture>: <p className='w-32 sm:w-48 h-44 sm:h-80 text-2xl text-center flex items-center'>No image available</p>
				}
				<h2 className='font-bitter font-bold sm:text-2xl text-headingText'>{truncateString(title, 30)}</h2>
			</Link>
			<p className='font-light text-sm sm:text-lg mt-2'>Release: {release_date}</p>
			<div className='flex -mt-2 items-start'>
				<IMDBSVG className={'w-14 sm:w-20'}/>
				<span className='ml-4 sm:text-2xl self-center text-headingText'>{vote_average > 0 ? addDecimal(vote_average): 'NR'}</span>
			</div>
		</motion.div>
	);
};

export default PosterCard;