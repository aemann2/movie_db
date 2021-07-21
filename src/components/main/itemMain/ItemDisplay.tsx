import ItemSplash from './components/itemSpalsh/ItemSplash';
import ItemHeading from './components/itemHeading/ItemHeading';
import ItemOverview from './components/itemOverview/ItemOverview';
import ItemOtherInfo from './components/itemOtherInfo/ItemOtherInfo';
import styled from 'styled-components';
import { ItemData } from '../../../models/models';

interface IProps {
	data: ItemData;
}

const ItemDisplay = ({
	data: {
		id,
		backdrop_path,
		title,
		release_date,
		runtime,
		vote_average,
		overview,
		genres,
		production_companies,
		credits,
	},
}: IProps) => {
	return (
		<BG path={backdrop_path}>
			<div className={'flex flex-col justify-center text-mainText relative'} key={id}>
				<ItemSplash backdrop_path={backdrop_path} />
				<div>
					<div className='flex w-3/4 mx-auto'>
						<div>
							<ItemHeading
								title={title}
								release_date={release_date}
								runtime={runtime}
								vote_average={vote_average}
							/>
							<ItemOverview overview={overview} />
							<ItemOtherInfo
								genres={genres}
								production_companies={production_companies}
								credits={credits}
							/>
						</div>
					</div>
				</div>
			</div>
		</BG>
	);
};

export default ItemDisplay;

// styled component for transparent background on item display
const BG = styled.div`
background: linear-gradient(180deg, rgba(24,26,29,1) 0%, rgba(46,47,74,1) 46%, rgba(24,26,29,1) 100%);
	position: relative;
	&:before {
		content: '';
		background-image: url('https://image.tmdb.org/t/p/w300/${(props) =>
		props.path}');
		background-size: cover;
		background-position: center;
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		filter: blur(16px);
		opacity: 0.1;
	}
`;
