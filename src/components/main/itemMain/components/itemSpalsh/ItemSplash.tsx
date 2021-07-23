import React from 'react';
import { srcSetUtils } from '../../../../../utils/helpers';

interface IProps {
	backdrop_path: string,
}

const ItemSplash = ({ backdrop_path }:IProps) => {
	const { getSrcSet, backdropVariants } = srcSetUtils;
	const src = getSrcSet(backdropVariants, backdrop_path);

	return (
		<div className='w-10/12 mx-auto' >
			{
				backdrop_path ? <img className='w-full' srcSet={src} src={backdropVariants[0].url} alt="" /> : <div className='h-32'></div>
			}
		</div>
	);
};

export default ItemSplash;
