import React from 'react';
import Navbar from '../../header/navbar/Navbar';
import Footer from '../../footer/Footer';

interface IProps {
	children: React.ReactElement | React.ReactElement[]
}

const PageContainer = ({ children }:IProps) => {
	return (
		<div style={{ minWidth: '310px' }}>
			<Navbar />
			{children}
			<Footer />
		</div>
	);
};

export default PageContainer;
