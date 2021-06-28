import { Link } from 'react-router-dom';
import imdb from './images/imdb.svg';
interface IProps {
	id: number,
	poster_path: string,
	title: string,
	release_date: string,
	vote_average: number
}

const PosterCard = ({ id, poster_path, title, release_date, vote_average }:IProps) => {

	return (
		<div className='mb-8 w-48'>
			<Link to={`/${id}`}>
				<img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} alt="" />
				<h2 className='inline '>{title}</h2>
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
