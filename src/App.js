import React from 'react';
import logo from './logo.svg';
import './App.css';

import SomeClassComponent from './components/someClass';
import HelloWorld from './components/HelloWorld';

function App() {
  return (
    <div className="App">
      <SomeClassComponent />
      <HelloWorld />
    </div>
  );
}

export default App;
