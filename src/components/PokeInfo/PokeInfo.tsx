import React from 'react'
import "./PokeInfo.css"
import { PokemonSchema } from '../../types/PokemonSchema';

interface PokeInfoProps{
  selectedPokemon: PokemonSchema  | undefined;
}
const PokeInfo = ({selectedPokemon}: PokeInfoProps) => {
 const {name,id,height,weight, sprites} = selectedPokemon || {};
  return (
    <div className="result-card">
{
    selectedPokemon?(
        <div>
          <img src={sprites} alt="Sprite" className="sprite" />
        <p>Name: {name}</p>
        <p>Id : {id}</p>
        <p> Height : {height}</p>
        <p>Weight: {weight}</p>
        </div>
    ):
      (  <h2>Welcome to the pokedex</h2>)
    
}
    </div>
  )
}

export default PokeInfo;