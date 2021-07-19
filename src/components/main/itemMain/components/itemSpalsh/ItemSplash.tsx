import React from 'react';

interface IProps {
	backdrop_path: string,
}

const ItemSplash = ({ backdrop_path }:IProps) => {
	return (
		<>
			<img className='w-10/12 mx-auto' src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt="" />
		</>
	);
};

export default ItemSplash;
