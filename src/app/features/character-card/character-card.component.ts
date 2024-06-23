import { Component, Input, OnInit } from '@angular/core';
import { CharacterService } from '../../core/services/character.service';
import { HttpClientModule } from '@angular/common/http';
import { Character } from '../../core/models/character.model';
import { Store } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { addFavorite, removeFavorite } from '../../state/actions/character.actions';
import { Observable, Subscription } from 'rxjs';
import { isFavorite } from '../../state/selectors/character.selectors';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-card',
  standalone: true,
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [CharacterService],
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss'
})
export class CharacterCardComponent implements OnInit {

  favoriteStatus: { [key: string]: boolean } = {};
  private subscriptions: Subscription[] = [];

  @Input() characters: Character[] = [];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.characters.forEach(character => {
      const subscription = this.store.select(isFavorite(character)).subscribe(isFav => {
        this.favoriteStatus[character.id] = isFav;
      });
      this.subscriptions.push(subscription);
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub: any) => sub.unsubscribe());
  }

  addToFavorites(character: Character) {
    this.store.dispatch(addFavorite({ character }));
  }

  removeFromFavorites(character: Character) {
    this.store.dispatch(removeFavorite({ character }));
  }

  toggleFavorite(character: Character) {
    if (this.favoriteStatus[character.id]) {
      this.removeFromFavorites(character);
    } else {
      this.addToFavorites(character);
    }
  }

  isFavorite(character: Character): Observable<boolean> {
    return this.store.select(isFavorite(character));
  }

}
