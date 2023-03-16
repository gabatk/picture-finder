import React, { useState } from 'react';
import AppHeader from './components/AppHeader';
import SearchForm from './components/SearchForm';
import ButtonPanel from './components/ButtonPanel';
import CategoryHeader from './components/CategoryHeader';
import ApiSection from './api/ApiSection';
import './App.css';
import { render } from 'react-dom';

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
			<SearchForm pasteValue={categoryValueHandler} />
			<ButtonPanel
				categoriesList={categories}
				pasteValue={categoryValueHandler}
			/>
			<CategoryHeader categoryTitle={categoryValue} />
			<ApiSection query={categoryValue}/>
		</div>
	
	);

}

export default App;
