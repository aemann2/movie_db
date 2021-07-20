import ItemSplash from './components/itemSpalsh/ItemSplash';
import ItemHeading from './components/itemHeading/ItemHeading';
import ItemOverview from './components/itemOverview/ItemOverview';
import ItemOtherInfo from './components/itemOtherInfo/ItemOtherInfo';
import style from './Item.module.css';
import { ItemData } from '../../../models/models';

interface IProps {
	data: ItemData;
}

const ItemDisplay = ({ data: { id, backdrop_path, title, release_date, runtime, vote_average, overview, genres, production_companies, credits } }:IProps) => {

	return (
		<div className={style.bg}>
			<div className={'flex flex-col justify-center text-mainText'} key={id}>
				<ItemSplash backdrop_path={backdrop_path} />
				<div>
					<div className='flex w-3/4 mx-auto'>
						<div>
							<ItemHeading title={title} release_date={release_date} runtime={runtime} vote_average={vote_average} />
							<ItemOverview overview={overview} />
							<ItemOtherInfo genres={genres} production_companies={production_companies} credits={credits} />
						</div>
					</div>
				</div>
			</div> 
		</div>
	);
};

export default ItemDisplay;
