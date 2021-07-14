import { runtimeFormat } from '../../../utils/helpers';
import IMDBSVG from './images/IMDBSVG';
import { ItemData } from '../../../models/models';

interface IProps {
	data: ItemData;
}

const ItemDisplay = ({ data: { id, backdrop_path, title, release_date, runtime, vote_average, overview, genres, production_companies, credits } }:IProps) => {
	return (
		<div>
			<div className='flex flex-col justify-center text-headingText' key={id}>
				<img src={`https://image.tmdb.org/t/p/w780/${backdrop_path}`} alt="" />
				<div className='flex w-3/4 ml-auto mr-auto'>
					<div className='w-3/4'>
						<h2 className='mt-2'>{title}</h2>
						<p className='flex'>
							<span>{release_date.slice(0,4)} | </span> 
							<span>{runtimeFormat(runtime)} | </span> 
							<span className='flex ml-2'>
								<IMDBSVG className={'w-10'}/>
								<span className='ml-2'>{vote_average}</span>
							</span>
						</p>
						<p className='mt-3'>{overview}</p>
					</div>
					<div className='w-1/4 flex flex-col justify-around items-center text-center'>
						<div>
							<h3>Genre:</h3>
							<p className='mb-2'>
								{genres.map((genre, i) => 
									<span className='text-mainText' key={i}>{genre.name}{i + 1 < genres.length ? ', ' : ''}</span>
								)}
							</p>
						</div>
						<div>
							<h3>Production Companies:</h3>
							<p className='mb-2'>
								{production_companies.map((company, i) => 
									<span className='text-mainText' key={i}>{company.name}{i + 1 < production_companies.length ? ' | ' : ''}</span>
								)}
							</p>
						</div>
						<div>
							<h3>Director:</h3>
							<p className='text-mainText'>
								{credits.crew.find(member => member.job === 'Director').name}
							</p>
						</div>
					</div>
				</div>
			</div> 
		</div>
	);
};

export default ItemDisplay;
