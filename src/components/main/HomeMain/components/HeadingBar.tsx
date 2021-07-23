import { useContext } from 'react';
import { FilmsContext } from '../../../../state/films/filmsProvider';
import endpoints from '../../../endpoints/endpoints';
import { paginationTypes } from '../../../../state/pagination';
import { usePaginationState } from '../../../../state/pagination/paginationProvider';
// a package for conditionally styling class names
import clsx from 'clsx';

const HeadingBar = () => {
	const { setEndpointQuery, resetState, endpointQuery } = useContext(FilmsContext);
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
				<h1 className='text-center text-2xl sm:text-4xl'>
					{endpointQuery === nowShowing ? 'Now Showing' : 
						endpointQuery === comingSoon ? 'Coming Soon' :
							'All Films'}
				</h1>
				<div className='flex justify-evenly text-md mt-2 sm:mt-6'>
					<span className={
						clsx('mr-2 sm:text-2xl font-bold hover:text-lightAttention cursor-pointer', 
							endpointQuery === nowShowing ?'text-lightAttention underline': 'text-headingText'
						)} onClick={() => handleClick(nowShowing)}> Now Showing
					</span>
					<span className={
						clsx('mr-2 sm:text-2xl font-bold hover:text-lightAttention cursor-pointer', 
							endpointQuery === comingSoon ? 'text-lightAttention underline': 'text-headingText'
						)} onClick={() => handleClick(comingSoon)}>Coming Soon</span>
				</div>
			</div>
			<hr className='mt-3 sm:mt-8 border-1 w-11/12 mx-auto border-mainText'/>
		</div>
	);
};

export default HeadingBar;
