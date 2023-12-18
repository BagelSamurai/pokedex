import "./Pokedex.css"
import { PokemonSchema } from "../../types/PokemonSchema"

// Components
import PokeInfo from "../PokeInfo/PokeInfo"
import PokeSearch from "../PokeSearch/PokeSearch"
import PokeList from "../PokeList/PokeList"


interface PokedexProps{
  searchedPokemons: PokemonSchema[];
  selectedPokemon: PokemonSchema | undefined;
  onInputChange: (inputValue:string)=>void;
  onPokemonClick : (pokemonName:string)=>void;

}
const Pokedex = ({searchedPokemons,onInputChange, onPokemonClick, selectedPokemon}: PokedexProps) => {
  
  return (
    <div className="pokedex-container">
    <div className="pokelist-container">
      
        <PokeSearch onInputChange={onInputChange}/>
        <PokeList
        onPokemonClick = {onPokemonClick}
        searchedPokemons={searchedPokemons}
        />
    </div>
    <div className="search-container">
        <PokeInfo  selectedPokemon={selectedPokemon} />
    </div>
    </div>
  )
}

export default Pokedex