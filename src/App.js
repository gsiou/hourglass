import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const goToPage  = () => {
    window.location.href = '#start'
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>H o u r g l a s s</h1>
        <button onClick={goToPage} className='Hourglass'><i className='far fa-hourglass'></i></button>
      </header>
      <div className="Frontpage" id="start">
          <p>
            I was born on <input type="date"/>
          </p>
          <p>
            I believe I'll die at the age of <input type="number" max={120}/>
          </p>
        </div>
    </div>
  );
}

export default App;
