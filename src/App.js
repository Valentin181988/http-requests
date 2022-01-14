
import React, { Component } from "react";
import './App.css';
import { Toaster } from 'react-hot-toast';
import { PokemonForm } from './components/PokemonForm';
import { PokemonInfo } from './components/PokemonInfo';



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
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName}/>
        <Toaster />
      </div>
    );
  };
  
}

export default App;
