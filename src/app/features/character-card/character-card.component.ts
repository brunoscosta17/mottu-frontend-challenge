import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { HttpClientModule } from '@angular/common/http';
import { Character } from '../../core/models/character.model';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [HttpClientModule],
  providers: [CharacterService],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent {

  @Input() characters: Character[] = [];

}
