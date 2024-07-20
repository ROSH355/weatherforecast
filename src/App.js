import React from 'react';
import Weather from './components/Weather';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="App-title">Weather App</h1>
      <div className="App-container">
        <Weather />
      </div>
    </div>
  );
}

export default App;

