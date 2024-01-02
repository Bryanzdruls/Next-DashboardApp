'use client'

import PokemonGrid from "@/pokemons/components/PokemonGrid";
import { useAppSelector } from "@/store/store";
import { useEffect, useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function PokemonComponentPage() {
    const favoritePokemons = useAppSelector(state => Object.values(state.pokemons.favorites))

  return (
    <>
        {
          favoritePokemons.length!==0 
          ? <PokemonGrid pokemons={favoritePokemons}/>
          : <NoFavorites/>
        }
    </>
  );
}
export const NoFavorites = () =>{
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-500"/>
      <span>There is no favorites</span>
    </div>
  )
}