import { SimplePokemon } from "@/pokemons";
import Image from "next/image";

export default function PokemonItemImage({id,name}:SimplePokemon) {
  return (
    <>
       <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
            width={100}
            height={100}
            alt={name}
            priority={ false }
        />
    </>
  );
}