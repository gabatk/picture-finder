import React from 'react';
import AppHeader from './components/AppHeader';
import SearchForm from './components/SearchForm';
import ButtonPanel from './components/ButtonPanel';
import './App.css';

const categories = [
	{ text: 'pets', id: 1 },
	{ text: 'food', id: 2 },
	{ text: 'cars', id: 3 },
	{ text: 'flowers', id: 4 },
];

function App() {
	return (
		<div className='App wrapper'>
			<AppHeader />
			<SearchForm />
			<ButtonPanel categoriesList={categories} />
		</div>
	);
}

export default App;
