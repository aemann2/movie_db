import { paginationTypes } from '../../../../state/pagination';
import { usePaginationState } from '../../../../state/pagination/paginationProvider';
import { motion } from 'framer-motion';

interface IProps {
	page: number;
	total_pages: number;
}

const hoverVariants = {
	hover: {
		opacity: 0.7,
		transition: { ease: 'easeInOut' }
	},
};

const Pagination = ({ page, total_pages }:IProps) => {
	const { dispatch: paginationDispatch } = usePaginationState();

	const handlePaginationIncrementClick = () => {
		const anchor = document.querySelector('#search');
		anchor!.scrollIntoView();

		if (page < total_pages) {
			paginationDispatch({ type: paginationTypes.INCREMENT_PAGE });
		}
	};

	const handlePaginationDecrementClick = () => {
		const anchor = document.querySelector('#search');
		anchor!.scrollIntoView();
		if (page > 1) {
			paginationDispatch({ type: paginationTypes.DECREMENT_PAGE });
		}
	};
	
	return (
		<div>
			<div className='mt-2 flex justify-center'>
				<motion.button className='pagination-btn mr-5' variants={hoverVariants} whileHover='hover'
					onClick={handlePaginationDecrementClick}
				>
				Previous
				</motion.button>
				<motion.button className='pagination-btn' variants={hoverVariants} whileHover='hover' onClick={handlePaginationIncrementClick}
				>
				Next
				</motion.button>
			</div>
			<div className='flex justify-center'>
				<p className='text-lg lg:text-2xl mt-4'>Page {page} of {total_pages}</p>
			</div>
		</div>
	);
};

export default Pagination;
