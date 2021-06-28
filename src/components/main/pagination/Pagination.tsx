import { Dispatch, SetStateAction } from 'react';

interface IProps {
	pageIndex: number;
	page: number;
	total_pages: number;
	setPageIndex: Dispatch<SetStateAction<number>>;
}

const Pagination = ({ setPageIndex, pageIndex, page, total_pages }:IProps) => {
	return (
		<div className='mt-2 flex justify-center'>
			<button className='border w-20 py-1 px-2 bg-gray-200 mr-2'
				onClick={() =>
					setPageIndex(page > 1 ? pageIndex - 1 : pageIndex - 0)
				}
			>
				Previous
			</button>
			<button className='border w-20 py-1 px-2 bg-gray-200'
				onClick={() =>
					setPageIndex(
						page < total_pages ? pageIndex + 1 : pageIndex + 0
					)
				}
			>
				Next
			</button>
		</div>
	);
};

export default Pagination;
