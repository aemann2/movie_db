import { useContext } from 'react';
import { DisplayContext } from '../../../context/DisplayContext';

const HeadingBar = () => {
	const { filmList, changeList } = useContext(DisplayContext);

	const handleClick = (input) => {
		changeList(input);
	};

	return (
		<div>
			<div className='flex flex-col text-headingText'>
				<h1 className='text-center text-2xl'>{filmList}</h1>
				<div className='flex justify-evenly text-md mt-2'>
					<span className='mr-2 font-bold hover:text-lightAttention cursor-pointer' onClick={() => handleClick('Now Showing')}>Now Showing</span>
					<span className='font-bold hover:text-lightAttention cursor-pointer' onClick={() => handleClick('Coming Soon')}>Coming Soon</span>
				</div>
			</div>
			<hr className='mt-3 border-1 border-mainText'/>
		</div>
	);
};

export default HeadingBar;
