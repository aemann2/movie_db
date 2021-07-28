import React from 'react';
import desktop from './images/me_desktop.jpg';
import mobile from './images/me_mobile.jpg';
import { motion } from 'framer-motion';

const pictureVariants = {
	hidden: {
		x: '-100vw',
		rotate: -180,
	},
	show: {
		x: 0,
		rotate: 0,
		transition: {
			type: 'spring',
			duration: 1,
		}
	}
};

const Picture = () => {
	return (
		<motion.div className='flex justify-center' variants={pictureVariants} initial='hidden' animate='show'>
			<img className='rounded-full h-40 md:h-52' srcSet={`${mobile} 580w, ${desktop} 870w`} sizes={'(max-width: 600px) 580px, 870px'} src={mobile} alt="" />
		</motion.div>
	);
};

export default Picture;
