import { PokemonGet } from "./PokemonGet";
import { PokemonImageGet } from "./PokemonImageGet";
import "./Sejeong.css";
import { typoStyles } from "../Typo/Typo";

export function PokemonCard({ pokemonId }) {
  return (
    <div id="PokemonCardZone">
      <PokemonImageGet pokemonId={pokemonId} />
      <PokemonGet pokemonId={pokemonId} />
    </div>
  );
}
