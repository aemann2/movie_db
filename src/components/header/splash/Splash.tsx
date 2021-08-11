import splash_mobile from './images/splash_mobile.png';
import splash from './images/splash.png';

const Splash = () => {
	return (
		<div className='px-6'>
			<picture className='block w-full mx-auto max-w-7xl'>
				<source media="(min-width: 768px)" srcSet={splash} />
				<img className='block w-full mx-auto max-w-7xl' src={splash_mobile} alt='Theater seats'/>
			</picture>
		</div>
	);
};

export default Splash;
