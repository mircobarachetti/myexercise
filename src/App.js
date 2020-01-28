import React from 'react';
import logo from './logo.svg';
import './App.css';
import MenuHeader from "./menu.tsx";
import jumbo from "./jumbotron.tsx";


function App() {
  return (

    <div className="App">
      <header className="App-header">
        <MenuHeader></MenuHeader>
        <jumbo></jumbo>
        
        
      </header>
    </div>
  );
}

export default App;
