import { PokemonSchema } from "../../types/PokemonSchema";
import PokeCard from "../PokeCard/PokeCard";
import "./PokeList.css";

interface PokelistProps {
  searchedPokemons: PokemonSchema[];
  onPokemonClick: (pokemonName: string) => void;
}

const Pokelist = ({ searchedPokemons, onPokemonClick }: PokelistProps) => {
  return (
    <div className="pokelist">
      {searchedPokemons.length > 0 ? (
        searchedPokemons.map((pokemon) => {
          return (
            pokemon.name && (
              <PokeCard
                onPokemonClick={onPokemonClick}
                key={pokemon.id}
                name={pokemon.name}
                spriteUrl={pokemon.sprites}
              />
            )
          );
        })
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Pokelist;
