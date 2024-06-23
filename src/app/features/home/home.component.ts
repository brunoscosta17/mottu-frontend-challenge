import { Component } from '@angular/core';
import { InputSearchComponent } from '../../core/components/input-search/input-search.component';
import { NothingFoundComponent } from '../../core/components/nothing-found/nothing-found.component';
import { ContentNothingFound } from '../../core/models/content-nothing-found';
import { CharacterCardComponent } from '../character-card/character-card.component';
import { CharacterService } from '../../core/services/character.service';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputSearchComponent,
    NothingFoundComponent,
    CharacterCardComponent
  ],
  providers: [CharacterService],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  characters: Character[] = [];
  allCharacters: Character[] = [];
  content: ContentNothingFound = {
    title: 'Nada foi encontrado',
    description: 'Tente realizar uma nova busca.'
  };

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getAllCharacters();
  }

  getAllCharacters() {
    this.characterService
      .getCharacters()
      .subscribe({
        next: (characters) => {
          this.characters = characters.results;
          this.allCharacters = characters.results;
        },
        error: (error) => {
          console.log('Erro:', error);
        }
      });
  }

  onSearchTextChanged(text: string) {
    this.searchCharacter(text);
  }

  searchCharacter(name: string) {
    if (name.trim() === '') {
      this.getAllCharacters();
    } else {
      this.characterService
        .searchCharacter(name)
        .subscribe({
          next: (characters) => {
            this.characters = characters.results;
          },
          error: (error) => {
            console.log('Erro:', error);
            this.characters = [];
          }
        });
    }
  }

}
