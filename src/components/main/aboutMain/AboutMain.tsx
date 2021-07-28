import React from 'react';
import Picture from '../aboutMain/components/picture/Picture';
import { motion } from 'framer-motion';

const AboutMain = () => {
	return (
		<div style={{ minHeight:'calc(100vh - 250px)' }} className='mt-20 md:flex md:flex-col'>
			<Picture />
			<motion.div className='flex flex-col items-center max-w-xl px-10 py-10 mx-auto lg:text-2xl' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}>
				<p className='lg:text-3xl'>Hi, my name is Adam and I'm a librarian-turned-coder. I created this project to get some practice using Tailwind and Typescript.</p>
				<h2 className='text-2xl lg:text-3xl text-center mt-10'>Main Technologies Used:</h2>
				<ul className='list-disc'>
					<li>React</li>
					<li>Tailwind</li>
					<li>Typescript</li>
					<li>SWR</li>
					<li>Framer Motion</li>
					<li>Context API w/ Hooks</li>
					<li>Netlify</li>
				</ul>
			</motion.div>
		</div>
	);
};

export default AboutMain;
