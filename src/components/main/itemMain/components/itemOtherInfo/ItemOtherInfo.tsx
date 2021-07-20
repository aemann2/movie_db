
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
		<div className='text-center my-10'>
			<div>
				<h3 className='text-headingText mb-2'>Genre:</h3>
				<ul>
					{genres.length > 0 ? 
						genres.slice(0, 4).map((genre, i) => 
							<li className='text-mainText' key={i}>{genre.name}</li>) : 
						<li>Unknown</li>
					}
				</ul>
			</div>
			<div>
				<h3 className='text-headingText mt-4 mb-2'>Production:</h3>
				<ul>
					{production_companies.length > 0 ? 
						production_companies.slice(0,3).map((company, i) => 
							<li className='text-mainText' key={i}>{company.name}</li>) : 
						<li>Unknown</li>
					}
				</ul>
			</div>
			<div>
				<h3 className='text-headingText mt-4 mb-2'>Director:</h3>
				<p className='text-mainText'>
					{credits.crew.length > 0 ? 
						credits.crew.find(member => member.job === 'Director').name : 
						'Unknown'
					}
				</p>
			</div>
		</div>
	);
};

export default ItemOtherInfo;
