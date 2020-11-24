import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const getGeoLocation = () => {
    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        console.log(pos);
        return pos;
      });
    } else {
      console.log("Geo Location not supported by browser");
      return 'Error';
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
          <span>{getGeoLocation()}</span>
      </header>
    </div>
  );
}

export default App;
