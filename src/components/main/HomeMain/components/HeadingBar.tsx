import { useContext } from 'react';
import { DisplayContext } from '../../../../state/DisplayContext';
import endpoints from '../../../endpoints/endpoints';
import { paginationTypes } from '../../../../state/pagination';
import { usePaginationState } from '../../../../state/pagination/paginationProvider';

const HeadingBar = () => {
	const { setEndpointQuery, resetState, endpointQuery } = useContext(DisplayContext);
	const { dispatch: paginationDispatch } = usePaginationState();
	const { nowShowing, comingSoon } = endpoints;

	const handleClick = (input) => {
		resetState();
		paginationDispatch({ type: paginationTypes.RESET });
		setEndpointQuery(input);
	};

	return (
		<div>
			<div className='flex flex-col text-headingText'>
				<h1 className='text-center text-2xl'>
					{endpointQuery === nowShowing ? 'Now Showing' : 
						endpointQuery === comingSoon ? 'Coming Soon' :
							'All Films'}
				</h1>
				<div className='flex justify-evenly text-md mt-2'>
					<span className='mr-2 font-bold hover:text-lightAttention cursor-pointer' onClick={() => handleClick(nowShowing)}>Now Showing</span>
					<span className='font-bold hover:text-lightAttention cursor-pointer' onClick={() => handleClick(comingSoon)}>Coming Soon</span>
				</div>
			</div>
			<hr className='mt-3 border-1 border-mainText'/>
		</div>
	);
};

export default HeadingBar;
