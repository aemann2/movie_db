import React from 'react';
interface IProps {
	backdrop_path: string,
}

const ItemSplash = ({ backdrop_path }:IProps) => {
	return (
		<div className='w-10/12 mx-auto max-w-7xl' >
			{
				backdrop_path ? 
					<picture>
						<source media="(max-width: 400px)" srcSet={`https://image.tmdb.org/t/p/w300/${backdrop_path}`}></source>
						<source media="(max-width: 1399px)" srcSet={`https://image.tmdb.org/t/p/w780/${backdrop_path}`}></source>
						<source media="(min-width: 1300px)" srcSet={`https://image.tmdb.org/t/p/w1280/${backdrop_path}`}></source>
						<img className='w-full' src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt='image splash' />
					</picture>: <div className='h-32'></div>
			}
		</div>
	);
};

export default ItemSplash;


{/* <img className='w-full' srcSet={src} src={backdropVariants[0].url} alt="splash" */}