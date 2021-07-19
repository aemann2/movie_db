import { useState, useRef } from 'react';
import { runtimeFormat } from '../../../utils/helpers';
import IMDBSVG from './images/IMDBSVG';
import { ItemData } from '../../../models/models';
import { truncateString } from '../../../utils/helpers';

interface IProps {
	data: ItemData;
}

const ItemDisplay = ({ data: { id, backdrop_path, title, release_date, runtime, vote_average, overview, genres, production_companies, credits } }:IProps) => {

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
		<div>
			<div className='flex flex-col justify-center text-mainText' key={id}>
				<img className='w-10/12 mx-auto' src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt="" />
				<div className='flex w-3/4 mx-auto'>
					<div>
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
						<p className='mt-3'>{truncateString(overview, overviewLength)}
							{	overview.length > 400 ?
								<span className='text-attention underline ml-2' ref={readMore} onClick={handleClick}>Read More</span> : null
							}
						</p>
						<div className='flex justify-around items-center text-center my-10'>
							<div>
								<h3 className='text-headingText mb-2'>Genre:</h3>
								<p>
									{genres.map((genre, i) => 
										<span className='text-mainText' key={i}>{genre.name}{i + 1 < genres.length ? ', ' : ''}</span>
									)}
								</p>
							</div>
							<div>
								<h3 className='text-headingText mb-2'>Production:</h3>
								<p>
									{production_companies.map((company, i) => 
										<span className='text-mainText' key={i}>{company.name}{i + 1 < production_companies.length ? ' | ' : ''}</span>
									)}
								</p>
							</div>
							<div>
								<h3 className='text-headingText mb-2'>Director:</h3>
								<p className='text-mainText'>
									{credits.crew.find(member => member.job === 'Director').name}
								</p>
							</div>
						</div>
					</div>

				</div>
			</div> 
		</div>
	);
};

export default ItemDisplay;
