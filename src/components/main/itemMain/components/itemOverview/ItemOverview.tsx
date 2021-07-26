import React, { useRef, useState } from 'react';
import { truncateString } from '../../../../../utils/helpers';

interface IProps {
	overview: string;
}

const ItemOverview = ({ overview }: IProps) => {
	const [ overviewLength, setOverviewLength ] = useState(400);
	const readMore = useRef<null | HTMLInputElement>(null);

	const handleClick = () => {
		if (overviewLength === 400) {
			setOverviewLength(Infinity);
			readMore.current!.innerHTML = 'Read Less';
		} else {
			setOverviewLength(400);
			readMore.current!.innerHTML = 'Read More';
		}
	};

	return (
		<div className='flex max-w-xl'>
			<p className='mt-3 lg:text-xl'>
				{truncateString(overview, overviewLength)}
				{overview.length > 400 ? (
					<span
						className='text-attention underline ml-2'
						ref={readMore}
						onClick={handleClick}
					>
						Read More
					</span>
				) : null}
			</p>
		</div>
	);
};

export default ItemOverview;
