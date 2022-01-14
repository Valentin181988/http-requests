
import React, { Component } from "react";
import './App.css';

import { PokemonForm } from './components/PokemonForm';

class App extends Component {
  state = {
    pokemonName: ''
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div>
        <PokemonForm onSubmit={this.handleFormSubmit}/>
      </div>
    );
  };
  
}

export default App;
