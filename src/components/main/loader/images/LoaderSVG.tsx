import SVGContainer from '../../../misc/svgContainer/SVGContainer';

interface IProps {
	className?: string
}

const LoaderSVG = ({ className }: IProps) => {
	return (
		<SVGContainer>
			<svg className={className} xmlnsXlink="http://www.w3.org/2000/svg" style={{ margin: 'auto', backgroundImage: 'none', display: 'block', shapeRendering: 'auto' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
				<circle cx="50" cy="50" fill="none" stroke="#fb8f86" stroke-width="10" r="35" stroke-dasharray="164.93361431346415 56.97787143782138">
					<animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
				</circle></svg>
		</SVGContainer>
	);
};

export default LoaderSVG;