import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";

export const localStorageMiddleware = (state:MiddlewareAPI) => {
    return (next:Dispatch) => (action:Action) =>{
        next(action)
        console.log(action);
        
        if(action.type === 'pokemons/toggleFavorite'){
            const {pokemons} = state.getState() as RootState;
            localStorage.setItem('favorite-pokemons', JSON.stringify( pokemons.favorites));
            return;
        }
    }
}