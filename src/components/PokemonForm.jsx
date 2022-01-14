import React, { Component } from "react";

export class PokemonForm extends Component {
    state = {
        pokemonName: '',
    };

    handleNameChange = event => {
        this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
       event.preventDefault();

       this.props.onSubmit(this.state.pokemonName)

       this.setState({ pokemonName: ''});
    };

    render() {
       return(
           <form onSubmit={this.handleSubmit}>
              <input 
               type="text"
               name="pokemonName"
               value={this.state.pokemonName}
               onChange={this.handleNameChange}>
              </input>
              <button
               type="submit"
               >Search</button>
           </form>
       );
    };
}