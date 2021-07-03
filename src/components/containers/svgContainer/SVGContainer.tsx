import React from 'react';

interface IProps {
	children: React.ReactElement
}

const SVGContainer = ({ children }:IProps) => {
	return (
		<>
			{children}
		</>
	);
};

export default SVGContainer;
