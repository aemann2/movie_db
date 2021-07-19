import GithubSVG from './images/GithubSVG';

const Footer = () => {
	return (
		<div className='flex mt-5 justify-center text-headingText'>
			<h2 className='text-lg mr-2'>Made by <span className='hover:text-lightAttention'><a href="https://adam-mann.co/" target="_blank">Adam Mann</a></span></h2>
			<a className='my-auto' href="https://adam-mann.co/" target="_blank">
				<GithubSVG className={'h-6 fill-current text-headingText hover:text-lightAttention'}/>
			</a>
		</div>
	);
};

export default Footer;
