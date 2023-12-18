import React from 'react';
import axios from 'axios';
import './App.css';
import Pokedex from '../Pokedex/Pokedex';
import { PokemonSchema } from '../../types/PokemonSchema';

export interface AppState {
  searchField: string;
  allPokemons: PokemonSchema[];
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
}


class App extends React.Component<any, AppState> {
  state: AppState = {
    searchField: "",
    allPokemons: [],
    searchedPokemons: [],
    selectedPokemon: undefined,
  };

  async componentDidMount() {
    try {
      const pokemonData = [];

      for (let i = 1; i <= 500; i++) {
        try {
          const req = await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`);
          const { id, name, sprites,  weight ,  height } = req.data;
    
          const patchedPokemon: PokemonSchema = {
            id,
            name,
            weight,
            height,
            sprites: sprites.front_default,
          };
          pokemonData.push(patchedPokemon);
        } catch (error) {
          console.error(`Error fetching data for Pokemon ${i}:`, error);
        }
      }

      this.setState({
        allPokemons: pokemonData,
        searchedPokemons: pokemonData,
      });
    } catch (error) {
      console.error('Error fetching Pokemon data:', error);
    }
  }

  handleInputChange = (inputValue:string)=>{
    const {allPokemons} = this.state;
    const searchedPokemons = allPokemons.filter(
      (pokemon: PokemonSchema) =>{
        return (
          pokemon.name && pokemon.name.toLowerCase().includes(inputValue.toLowerCase())
        )
      }
    )
    this.setState({
      searchField: inputValue,
      searchedPokemons: searchedPokemons
    })
  };
  handleClick = (pokemonName: string) => {
    const { allPokemons } = this.state;

   
    const selectedPokemon = allPokemons.find(
        (pokemon: PokemonSchema) => pokemon.name === pokemonName
    );

    // Update the state
    this.setState({ selectedPokemon });
};
  render() {
    return (
      <div className="App">
        <h1>Pokedex</h1>
        <Pokedex 
        searchedPokemons={this.state.searchedPokemons} 
        selectedPokemon={this.state.selectedPokemon}
        onPokemonClick = {this.handleClick}
        onInputChange={this.handleInputChange}
        
        />
      </div>
    );
  }
}

export default App;
