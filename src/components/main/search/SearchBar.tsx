import { Dispatch, SetStateAction, useState, useContext } from 'react';
import SearchIconSVG from './images/SearchIconSVG';
import { DisplayContext } from '../../../context/DisplayContext';

interface IProps {
	setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({ setSearch }:IProps) => {
	const [ input, setInput ] = useState('');
	const { changeList } = useContext(DisplayContext);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(input);
		if (input) {
			changeList('All Films');
		} else {
			changeList('Now Showing');
		}
	};
	
	return (
		<div className='text-center my-5 flex justify-center'>
			<form onSubmit={handleSubmit} className='border border-mainText py-2 px-2 flex w-11/12 rounded-xl'>
				<SearchIconSVG className='h-5 my-auto mr-2' />
				<input className="text-sm bg-background placeholder-headingText w-7/12" type='text' value={input} placeholder="Search All Films..." onChange={(e) => setInput(e.target.value)} />
				<input className='border-0 text-xs bg-attention ml-auto p-1 rounded-lg cursor-pointer' type='submit' value='Submit' />
			</form>
		</div>
	);
};
export default SearchBar;




