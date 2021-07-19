
interface IProps {
	genres: [{
    name?: string | undefined;
	}],
	production_companies: [{
		name?: string | undefined;
	}],
	credits: {
		crew: any;
	}
}

const ItemOtherInfo = ({ genres, production_companies, credits }:IProps) => {
	return (
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
	);
};

export default ItemOtherInfo;
