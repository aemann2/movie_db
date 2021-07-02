import SVGContainer from '../../../misc/svgContainer/SVGContainer';

interface IProps {
	className?: string
}

const SearchIconSVG = ({ className }: IProps) => {
	return (
		<SVGContainer>
			<svg className={className} width="44" height="50" viewBox="0 0 44 50" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M34.5827 19.0274C34.5827 28.9619 27.1053 36.8904 18.0303 36.8904C8.95536 36.8904 1.47803 28.9619 1.47803 19.0274C1.47803 9.09286 8.95536 1.16437 18.0303 1.16437C27.1053 1.16437 34.5827 9.09286 34.5827 19.0274Z" fill="#202429" stroke="#D5D5D5" stroke-width="2"/>
				<line y1="-1" x2="21.3732" y2="-1" transform="matrix(0.694887 0.719119 -0.694887 0.719119 27.4816 33.6986)" stroke="#D5D5D5" stroke-width="2"/>
			</svg>
		</SVGContainer>
	);
};

export default SearchIconSVG;