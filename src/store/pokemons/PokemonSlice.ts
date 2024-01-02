import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface FavoritePokemonsState {
    favorites: {[key:string]: SimplePokemon}
}

const initialState: FavoritePokemonsState = {
  favorites: {}
  //...getInitialState()
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{[key:string]: SimplePokemon}>){
      state.favorites = action.payload;
    },
    toggleFavorite(state, action:PayloadAction<SimplePokemon>){
      const pokemon =action.payload;
      const {id} = pokemon;
      
      if( !!state.favorites[id] ){
        delete state.favorites[id];
        return;
      }else{
        state.favorites[id]= pokemon;
      }

      
    }
  }
});

export const {toggleFavorite,setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer