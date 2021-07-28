import PosterCard from './components/PosterCard';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.08
		}
	}
};

const listItem = {
	hidden: { opacity: 0 },
	show: { opacity: 1, scale: [ 1, 1.01, 1 ] }
};

const Posters = ({ data }) => {
	return (
		<motion.div className='mt-7 flex flex-wrap gap-x-4 xs:gap-x-7 px-4 justify-center mx-auto max-w-7xl' variants={container} initial="hidden" animate="show" >
			{data.results.length ? data.results.map((item) => (
				<motion.div className='w-32 sm:w-48 md:w-56' key={item.id} variants={listItem}>
					<PosterCard data={item} />
				</motion.div>
			)) : <div className='text-4xl'>Your search did not return any results</div>}
		</motion.div>
	);
};

export default Posters;
