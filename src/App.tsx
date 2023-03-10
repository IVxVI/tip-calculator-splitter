import React from 'react';
import { Header } from './components/Header/Header';
import './App.css';
import { Main } from './components/Main/Main';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
};

export default App;
