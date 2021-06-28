
const HeadingBar = () => {
	return (
		<div className='flex text-headingText'>
			<h1 className='mt-4 text-center text-3xl'>Now Showing</h1>
			<div className='ml-auto self-end'>
				<span className='mr-2 cursor-pointer'>Now Showing</span>
				<span className='cursor-pointer'>Coming Soon</span>
			</div>
			<hr />
		</div>
	);
};

export default HeadingBar;
