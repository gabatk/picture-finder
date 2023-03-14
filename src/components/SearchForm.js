import React from 'react';
import './SearchForm.css';

const SearchForm = props => {
	return (
		<form>
			<input type={'text'} placeholder='Search...' className='search' defaultValue={props.searchInput}>
			</input>
		</form>
	);
};

export default SearchForm;
