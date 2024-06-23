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
  receivedText: string = '';
  content: ContentNothingFound = {
    title: 'Nada foi encontrado',
    description: 'Tente realizar uma nova busca.'
  };

  constructor(private characterService: CharacterService) { }

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    this.characterService
      .getCharacters()
      .subscribe({
        next: (characters) => {
          console.log('Personagens:', characters);
          this.characters = characters.results;
        },
        error: (error) => {
          console.log('Erro:', error);
        }
      });
  }

  onSearchTextChanged(text: string) {
    this.receivedText = text;
    console.log('Texto recebido:', this.receivedText);
  }

}
