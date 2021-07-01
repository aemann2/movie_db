import PosterCard from './components/PosterCard';

const Posters = ({ data }) => {
	return (
		<div className='mt-7 flex flex-wrap gap-x-8 justify-center'>
			{data.results.map(({ id, poster_path, title, release_date, vote_average }) => (
				<div key={id}>
					<PosterCard id={id} poster_path={poster_path} title={title} release_date={release_date} vote_average={vote_average} />
				</div>
			))}
		</div>
	);
};

export default Posters;
