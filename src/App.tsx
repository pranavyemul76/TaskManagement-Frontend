import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Homepage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Navbar></Navbar>
      </header>
      <main className='p-4'>
        <Homepage></Homepage>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
