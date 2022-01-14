import React, { Component } from "react";

export class PokemonInfo extends Component {
    state = {
        pokemon: null,
        loading: false
    };

    componentDidUpdate(prevProps, prevState) {

        if (prevProps.pokemonName !== this.props.pokemonName) {

            this.setState({loading: true});

            setTimeout(() => {
                fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.pokemonName}`)
                .then(response => response.json())
                .then(pokemon  => this.setState({ pokemon }))
                .finally(() => this.setState({loading: false}));
            }, 2000);      
        };    
    };

    render() { 
        const { loading, pokemon } = this.state;
        const { pokemonName } = this.props;
        return(
            <div>
                <h1>Pokemon info</h1>
                {loading && <div>Loading ...</div>}
                {!pokemonName && <p>Please enter the pokemon name</p>}
                {pokemon && 
                  <div>{pokemon.name}
                    <img src={pokemon.sprites.other['official-artwork'].front_default} 
                         alt=""
                         width="200"></img>
                  </div>}
            </div>
        );
    };
}