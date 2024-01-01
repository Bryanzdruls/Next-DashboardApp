import { PokemonsResponse, SimplePokemon } from "@/pokemons";
import PokemonGrid from "@/pokemons/components/PokemonGrid";
import { Metadata } from "next";

export const metadata: Metadata ={
    title: '151 Pokemons',
    description: 'Eu laborum eu dolor dolor laborum occaecat culpa.'
}

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col">
        <span className="text-5xl my-2"><small className="text-blue-500">Favorites </small>Pokemons</span>
        <PokemonGrid pokemons={[]}/>
    </div>
  );
}