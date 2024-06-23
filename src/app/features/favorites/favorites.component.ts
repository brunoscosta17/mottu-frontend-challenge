import { Component, OnInit } from '@angular/core';
import { NothingFoundComponent } from '../../core/components/nothing-found/nothing-found.component';
import { ContentNothingFound } from '../../core/models/content-nothing-found';
import { PropertiesActionButton } from '../../core/models/properties-action-button';
import { Character } from '../../core/models/character.model';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { selectFavoriteCharacters } from '../../state/selectors/character.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [
    CommonModule,
    NothingFoundComponent,
    CharacterCardComponent
  ],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  contentNothingFound: ContentNothingFound = {
    title: 'Parece que você ainda não tem favoritos',
    description: 'Volte à página inicial e escolha os melhores para você.'
  };
  propertiesActionButton: PropertiesActionButton = {
    label: 'Voltar ao início',
    url: '/'
  };

  characters$: Observable<Character[] | null>;

  constructor(private store: Store<AppState>) {
    this.characters$ = this.store.select(selectFavoriteCharacters);
  }

  ngOnInit() {}
}
