import { NavLink } from 'react-router-dom';
import filmReel from './images/filmReel.svg';

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className='text-headingText'>
					<div className='flex'>
						<li className='text-4xl mx-auto'>
							<NavLink className='flex' to='/'>
								<img className='inline-block -mr-2 z-10' src={filmReel} alt="" /><span>Movie<span className='text-attention font-bold'>Finder</span></span>
							</NavLink>
						</li>
					</div>
					<div className='flex text-lg justify-around my-4'>
						<li className='hover:text-lightAttention'>
							<NavLink to='/'>
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