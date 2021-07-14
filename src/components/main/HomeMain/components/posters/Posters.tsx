import PosterCard from './components/PosterCard';

const Posters = ({ data }) => {
	return (
		<div className='mt-7 flex flex-wrap gap-x-8 justify-center'>
			{data.results.map((item) => (
				<div key={item.id}>
					<PosterCard data={item} />
				</div>
			))}
		</div>
	);
};

export default Posters;
