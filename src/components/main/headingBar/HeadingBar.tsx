
const HeadingBar = () => {
	return (
		<div>
			<div className='flex flex-col text-headingText'>
				<h1 className='text-center text-2xl'>Now Showing</h1>
				<div className='flex justify-evenly text-md mt-2'>
					<span className='mr-2 font-bold hover:text-lightAttention cursor-pointer'>Now Showing</span>
					<span className='font-bold hover:text-lightAttention cursor-pointer'>Coming Soon</span>
				</div>
			</div>
			<hr className='mt-3 border-1 border-mainText'/>
		</div>
	);
};

export default HeadingBar;
