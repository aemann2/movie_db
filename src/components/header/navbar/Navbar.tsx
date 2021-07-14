import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import ReelSVG from './images/ReelSVG';
import { DisplayContext } from '../../../context/DisplayContext';

const Navbar = () => {
	const { setHeaderText, setSearchInput, setFilmSearch, setPageIndex } = useContext(DisplayContext);

	const resetPage = () => {
		setHeaderText('Now Showing');
		setSearchInput('');
		setFilmSearch('');
		setPageIndex(1);
	};

	return (
		<>
			<nav>
				<ul className='text-headingText'>
					<div className='flex'>
						<li className='text-4xl mx-auto'>
							<NavLink className='flex' to='/'>
								<ReelSVG className={'inline-block -mr-2 z-10 h-9 fill-current text-attention'} /><span>Movie<span className='text-attention font-bold'>Finder</span></span>
							</NavLink>
						</li>
					</div>
					<div className='flex text-lg justify-around my-4'>
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