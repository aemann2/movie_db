import { paginationTypes } from '../../../../state/pagination';
import { usePaginationState } from '../../../../state/pagination/paginationProvider';

interface IProps {
	page: number;
	total_pages: number;
}

const Pagination = ({ page, total_pages }:IProps) => {
	const { dispatch: paginationDispatch } = usePaginationState();

	const handlePaginationIncrementClick = () => {
		if (page < total_pages) {
			paginationDispatch({ type: paginationTypes.INCREMENT_PAGE });
		}
	};

	const handlePaginationDecrementClick = () => {
		if (page > 1) {
			paginationDispatch({ type: paginationTypes.DECREMENT_PAGE });
		}
	};
	
	return (
		<div className='mt-2 flex justify-center'>
			<button className='border w-20 py-1 px-2 bg-mainText text-background mr-5'
				onClick={handlePaginationDecrementClick}
			>
				Previous
			</button>
			<button className='border w-20 py-1 px-2 bg-mainText text-background'
				onClick={handlePaginationIncrementClick}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
