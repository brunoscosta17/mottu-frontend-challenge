import { createAction, props } from '@ngrx/store';
import { Character } from '../../core/models/character.model';

export const addFavorite = createAction(
  '[Character] Add Favorite',
  props<{ character: Character }>()
);

export const removeFavorite = createAction(
  '[Character] Remove Favorite',
  props<{ character: Character }>()
);
