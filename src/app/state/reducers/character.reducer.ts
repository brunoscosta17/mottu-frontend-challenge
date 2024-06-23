import { createReducer, on } from '@ngrx/store';
import { addFavorite, removeFavorite } from '../actions/character.actions';
import { Character } from '../../core/models/character.model';

export interface CharacterState {
  favorites: Character[];
}

export const initialState: CharacterState = {
  favorites: []
};

export const characterReducer = createReducer(
  initialState,
  on(addFavorite, (state, { character }) => ({
    ...state,
    favorites: [...state.favorites, character]
  })),
  on(removeFavorite, (state, { character }) => ({
    ...state,
    favorites: state.favorites.filter(fav => fav.id !== character.id)
  }))
);
