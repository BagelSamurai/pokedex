import "./PokeCard.css"

interface PokeCardProps{
  spriteUrl?:string;
  name:string;
  onPokemonClick : (pokemonName:string)=>void;
}

const PokeCard = ({spriteUrl,name, onPokemonClick}:PokeCardProps) => {
 
  return (
    <div onClick ={
      () => onPokemonClick(name)
 
    } className="pokecard">
      <img src={spriteUrl}  className="pokemon-sprite" />
        <p>{name}</p>
    </div>
  )
}

export default PokeCard