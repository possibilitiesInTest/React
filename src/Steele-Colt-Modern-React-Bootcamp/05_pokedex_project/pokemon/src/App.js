import React, {Component} from 'react';
//import Pokecard from './Pokecard';
import Pokedex from './Pokedex'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Pokecard
      id ={4}
      name = "Charmander"
      type="fire"
      exp={62}
      /> */}
      <Pokedex />
    </div>
  );
}

export default App;