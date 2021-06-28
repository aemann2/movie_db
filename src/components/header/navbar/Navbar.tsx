import { NavLink } from 'react-router-dom';
import filmReel from './images/filmReel.svg';

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className='text-headingText'>
					<div className='flex'>
						<li className='text-5xl mx-auto'>
							<NavLink className='flex' to='/'>
								<img className='inline-block -mr-3 z-10' src={filmReel} alt="" /><span>Movie<span className='text-attention'>Finder</span></span>
							</NavLink>
						</li>
					</div>
					<div className='flex text-xl justify-around my-4'>
						<li className='mr-2'>
							<NavLink to='/'>
						Home
							</NavLink>
						</li>
						<li className='mr-2'>
							<NavLink to='/about'>
							About
							</NavLink>
						</li>
						<li>
							<a href="https://www.themoviedb.org/" target='_blank'>MovieDB</a>
						</li>
					</div>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;