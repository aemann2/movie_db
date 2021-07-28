import React from 'react';
import Footer from '../../footer/Footer';

interface IProps {
	children: React.ReactElement | React.ReactElement[]
}

const PageContainer = ({ children }:IProps) => {
	return (
		<div style={{ minWidth: '310px' }} className='min-h-screen'>
			{/* <Navbar /> */}
			{children}
			<Footer />
		</div>
	);
};

export default PageContainer;
