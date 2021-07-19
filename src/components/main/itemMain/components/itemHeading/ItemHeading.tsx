import React from 'react';
import { runtimeFormat } from '../../../../../utils/helpers';
import IMDBSVG from '../../images/IMDBSVG';

interface IProps {
	title: string,
	release_date: string,
	vote_average: number,
	runtime: number
}

const ItemHeading = ({ title, release_date, vote_average, runtime  }:IProps) => {
	return (
		<>
			<h2 className='mt-8 text-4xl font-semibold text-headingText'>{title}</h2>
			<p className='flex mt-2'>
				<span className='mr-1'>{release_date.slice(0,4)} 
					<span className='mx-2'>|</span> 
				</span> 
				<span>{runtimeFormat(runtime)}
					<span className='mx-2'>|</span>
				</span> 
				<span className='flex ml-1'>
					<IMDBSVG className={'w-10 -mt-2'}/>
					<span className='ml-2'>{vote_average}</span>
				</span>
			</p>
		</>
	);
};

export default ItemHeading;
