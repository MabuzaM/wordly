import React from 'react';
import './App.scss';
import { Navbar } from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App__header">
        <Navbar />
      </header>

      <main className="App__main">


      </main>
    </div>
  );
}

export default App;
