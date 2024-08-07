import React from 'react';
import './App.css';
import { Header } from './components/header';
import { HomePage } from './components/homePage';

function App() {
  return (
    <div className="App">
      <Header/>
      <HomePage />
    </div>
  );
}

export default App;