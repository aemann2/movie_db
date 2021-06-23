import { Link } from 'react-router-dom';
import { Results } from '../../../pages/Home';
import imdb from './images/imdb.svg';

const PosterCard = ({ id, poster_path, title, release_date, vote_average }:Results) => {

	return (
		<div className='mb-8 w-48'>
			<img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
			<Link to={`/${id}`}>
				<h2>{title}</h2>
			</Link>
			<p>Release Date: {release_date}</p>
			<div className='flex'>
				<img src={imdb} alt="" />
				<span>{vote_average}</span>
			</div>
		</div>
	);
};

export default PosterCard;
