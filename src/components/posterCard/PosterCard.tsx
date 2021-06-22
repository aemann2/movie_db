import React from 'react';
import { Results } from '../../pages/Home';
import imdb from './images/imdb.svg';

const PosterCard = ({poster_path, title, release_date, vote_average}:Results) => {
	return (
		<div className='mb-8'>
			<img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
			<h2>{title}</h2>
			<p>Release Date: {release_date}</p>
			<div className='flex'>
				<img src={imdb} alt="" />
				<span>{vote_average}</span>
			</div>
		</div>
	);
};

export default PosterCard;
