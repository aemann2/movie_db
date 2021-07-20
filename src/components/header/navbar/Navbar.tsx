import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ReelSVG from './images/ReelSVG';
import { FilmsContext } from '../../../state/films/filmsProvider';
import { paginationTypes } from '../../../state/pagination';
import { usePaginationState } from '../../../state/pagination/paginationProvider';
import endpoints from '../../endpoints/endpoints';

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
			<nav>
				<ul className='text-headingText'>
					<div className='flex'>
						<li className='text-4xl mx-auto'>
							<NavLink onClick={() => resetPage()} className='flex' to='/'>
								<ReelSVG className={'inline-block -mr-2 z-10 h-9 fill-current text-attention'} /><span>Movie<span className='text-attention font-bold'>Finder</span></span>
							</NavLink>
						</li>
					</div>
					<div className='flex text-lg justify-around mt-4 mb-10 px-10'>
						<li className='hover:text-lightAttention'>
							<NavLink onClick={() => resetPage()} to='/'>
						Home
							</NavLink>
						</li>
						<li className='hover:text-lightAttention'>
							<NavLink to='/about'>
							About
							</NavLink>
						</li>
						<li className='hover:text-lightAttention'>
							<a href="https://www.themoviedb.org/" target='_blank'>MovieDB</a>
						</li>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;