import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = props => {
	const [searchedInput, setSearchedInput] = useState('');

	const insertText = event => {
		setSearchedInput(event.target.value);
	};

	const SubmitHandler = event => {
		event.preventDefault();
		props.pasteValue(searchedInput);
		setSearchedInput('');
	};

	return (
		<form onSubmit={SubmitHandler}>
			<input
				type='text'
				placeholder='Search...'
				className='search'
				onChange={insertText}
				value={searchedInput}></input>
		</form>
	);
};

export default SearchForm;
