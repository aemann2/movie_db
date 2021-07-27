import React from 'react';
import desktop from './images/me_desktop.jpg';
import mobile from './images/me_mobile.jpg';

const Picture = () => {
	return (
		<div className='flex justify-center'>
			<img className='rounded-full h-40 md:h-52' srcSet={`${mobile} 580w, ${desktop} 870w`} sizes={'(max-width: 600px) 580px, 870px'} src={mobile} alt="" />
		</div>
	);
};

export default Picture;
