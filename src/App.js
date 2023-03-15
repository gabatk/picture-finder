import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import SearchForm from './components/SearchForm';
import ButtonPanel from './components/ButtonPanel';
import CategoryHeader from './components/CategoryHeader';
import './App.css';

const categories = [
	{ text: 'pets', id: 1 },
	{ text: 'food', id: 2 },
	{ text: 'cars', id: 3 },
	{ text: 'flowers', id: 4 },
];

function App() {
	const [categoryValue, setCategoryValue] = useState('');

	const categoryValueHandler = category => {
		setCategoryValue(category);
	};

	return (
		<div className='App wrapper'>
			<AppHeader />
			<SearchForm
				searchInput={categoryValue}
				pasteValue={categoryValueHandler}
			/>
			<ButtonPanel
				categoriesList={categories}
				pasteValue={categoryValueHandler}
			/>
			<CategoryHeader categoryTitle={categoryValue}/>
		</div>
	);
}

export default App;
