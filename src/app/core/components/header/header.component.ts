import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../../../state/app.state';
import { CommonModule } from '@angular/common';
import { selectFavoriteCount } from '../../../state/selectors/character.selectors';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  favoriteCount$!: Observable<number>;

  constructor(
    public _router: Router,
    private store: Store<AppState>) {
      this.favoriteCount$ = this.store.select(selectFavoriteCount);
    }

}
