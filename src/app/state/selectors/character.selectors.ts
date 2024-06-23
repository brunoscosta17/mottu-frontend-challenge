import { createSelector, createFeatureSelector } from '@ngrx/store';
import { CharacterState } from '../reducers/character.reducer';
import { Character } from '../../core/models/character.model';

export const selectCharacterState = createFeatureSelector<CharacterState>('characters');

export const selectFavoriteCharacters = createSelector(
  selectCharacterState,
  (state: CharacterState) => state.favorites
);

export const isFavorite = (character: Character) => createSelector(
  selectFavoriteCharacters,
  (favorites: Character[]) => !!favorites.find(fav => fav.id === character.id)
);

export const selectFavoriteCount = createSelector(
  selectFavoriteCharacters,
  (favorites: Character[]) => favorites.length
);
