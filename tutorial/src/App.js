import React from 'react';
import logo from './logo.svg';
import './App.css';
import {x as num1,y as num2} from './module';
import Test2 from './module';
import {default as hmida} from './module';

function App() {
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
          Learn React{num1+num2}{hmida}
        </a>
      </header>
    </div>
  );
}

export default App;
