import React, {Dispatch, SetStateAction, useState} from 'react';

interface IProps {
	setSearch: Dispatch<SetStateAction<string>>;
}

const SearchBar = ({setSearch}:IProps) => {
	const [input, setInput] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(input);
		setInput('');
	};
	
	return (
		<div className='text-center py-3'>
			<form onSubmit={handleSubmit}>
				<input className="border w-8/12 text-lg m-auto" type='text' value={input} placeholder="Enter text" onChange={(e) => setInput(e.target.value)} />
				<input className='border ml-1 p-1' type='submit' value='Submit' />
			</form>
		</div>
	);
};
export default SearchBar;




