import gh_logo from './images/github.svg';

const Footer = () => {
	return (
		<div className='flex mt-5 justify-center'>
			<h2 className='text-2xl mr-1'>Made by Adam Mann</h2>
			<img src={gh_logo} alt="" />
		</div>
	);
};

export default Footer;
