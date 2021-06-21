import React from 'react';
import loader from './images/loader.svg';

const Loader = () => {
	return (
		<div className='flex justify-center align-center'>
			<img src={loader} alt="loader" />
		</div>
	)
}

export default Loader
