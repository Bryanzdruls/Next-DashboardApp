import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "@/pokemons/components/PokemonGrid";




const getPokemons = async(limit = 20, offset= 0): Promise<SimplePokemon[]> =>{
    const pokemonResponse:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${ limit }&offset=${ offset }`)
        .then( res => res.json());
   
    const pokemonsArray:SimplePokemon[] = pokemonResponse.results.map( pokemon => ({
        id: pokemon.url.split('/').at(-2)!,
        name: pokemon.name,
    })) 

    return pokemonsArray;
}

export default async function PokemonsPage() {
    const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2"><small>static</small> Pokemon list</span>
        <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}