import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<>
			<nav>
				<ul className='flex justify-center'>
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
						<a href="https://www.themoviedb.org/" target='_blank'>The Movie DB</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Navbar;