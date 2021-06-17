import { NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
	return (
		<>
		<nav>
			<ul className='flex'>
				<li className='mr-2'>
					<NavLink to='/'>
						Home
					</NavLink>
				</li>
				<li className='mr-2'>
					<NavLink to='/item'>
						Item
					</NavLink>
				</li>
				<li>
					<NavLink to='/search'>
						Search
					</NavLink>
				</li>
			</ul>
		</nav>
	</>
	)
}

export default Navbar;