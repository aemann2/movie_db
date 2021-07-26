import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ReelSVG from './images/ReelSVG';
import { FilmsContext } from '../../../state/films/filmsProvider';
import { paginationTypes } from '../../../state/pagination';
import { usePaginationState } from '../../../state/pagination/paginationProvider';
import endpoints from '../../../utils/endpoints/endpoints';

const Navbar = () => {
	const { nowShowing } = endpoints;
	const { dispatch: paginationDispatch } = usePaginationState();
	const { setEndpointQuery, resetState } = useContext(FilmsContext);

	const resetPage = () => {
		resetState();
		paginationDispatch({ type: paginationTypes.RESET });
		setEndpointQuery(nowShowing);
	};

	return (
		<>
			<nav className='max-w-7xl mx-auto lg:px-9 lg:mb-8'>
				<ul className='text-headingText'>
					<div className='lg:flex lg:justify-between'>
						<div className='flex'>
							<li className='text-4xl sm:text-6xl lg:text-5xl mx-auto font-mont'>
								<NavLink onClick={() => resetPage()} className='flex' to='/'>
									<ReelSVG className={'inline-block -mr-2 sm:-mr-4 z-10 h-9 sm:h-14 lg:h-12 fill-current text-attention'} /><span>Movie<span className='text-attention font-bold'>Finder</span></span>
								</NavLink>
							</li>
						</div>
						<div className='flex text-lg sm:text-3xl justify-around mt-4 mb-10 lg:m-0 px-10 font-mont'>
							<li className='hover:text-lightAttention lg:font-bold'>
								<NavLink onClick={() => resetPage()} to='/'>
						Home
								</NavLink>
							</li>
							<li className='hover:text-lightAttention lg:ml-8 lg:font-bold'>
								<NavLink to='/about'>
							About
								</NavLink>
							</li>
							<li className='hover:text-lightAttention lg:ml-8 lg:font-bold'>
								<a href="https://www.themoviedb.org/" target='_blank'>MovieDB</a>
							</li>
						</div>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;