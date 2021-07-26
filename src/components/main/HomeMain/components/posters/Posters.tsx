import PosterCard from './components/PosterCard';

const Posters = ({ data }) => {
	return (
		<div className='mt-7 flex flex-wrap gap-x-7 px-4 justify-center mx-auto max-w-7xl'>
			{data.results.length ? data.results.map((item) => (
				<div className='w-32 sm:w-48 md:w-56' key={item.id}>
					<PosterCard data={item} />
				</div>
			)) : <div className='text-4xl'>Your search did not return any results</div>}
		</div>
	);
};

export default Posters;
