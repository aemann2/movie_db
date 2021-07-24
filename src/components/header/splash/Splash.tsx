import splash_mobile from './images/splash_mobile.png';
import splash from './images/splash.png';

const Splash = () => {
	return (
		<div className='px-6'>
			<img className='block w-full mx-auto max-w-7xl' src={splash_mobile} srcSet={`${splash} 768w`} alt='Theater seats' />
		</div>
	);
};

export default Splash;
