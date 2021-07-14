import { useContext } from 'react';
import { DisplayContext } from '../../../../context/DisplayContext';

interface IProps {
	page: number;
	total_pages: number;
}

const Pagination = ({ page, total_pages }:IProps) => {
	const { pageIndex, setPageIndex } = useContext(DisplayContext);
	
	return (
		<div className='mt-2 flex justify-center'>
			<button className='border w-20 py-1 px-2 bg-mainText text-background mr-2'
				onClick={() =>
					setPageIndex(page > 1 ? pageIndex - 1 : pageIndex - 0)
				}
			>
				Previous
			</button>
			<button className='border w-20 py-1 px-2 bg-mainText text-background'
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
