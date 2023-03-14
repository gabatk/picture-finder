import React from 'react';
import AppHeader from './components/AppHeader';
import SearchForm from './components/SearchForm';
import './App.css';

function App() {
  return (
    <div className="App wrapper">
    <AppHeader />
    <SearchForm />
    </div>
  );
}

export default App;
