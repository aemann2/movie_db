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
		<div>
			<div className='mt-2 flex justify-center'>
				<button className='pagination-btn mr-5'
					onClick={handlePaginationDecrementClick}
				>
				Previous
				</button>
				<button className='pagination-btn'
					onClick={handlePaginationIncrementClick}
				>
				Next
				</button>
			</div>
			<div className='flex justify-center'>
				<p className='text-lg lg:text-2xl mt-4'>Page {page} of {total_pages}</p>
			</div>
		</div>
	);
};

export default Pagination;
