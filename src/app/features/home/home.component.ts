import { Component } from '@angular/core';
import { InputSearchComponent } from '../../core/components/input-search/input-search.component';
import { NothingFoundComponent } from '../../core/components/nothing-found/nothing-found.component';
import { ContentNothingFound } from '../../core/models/content-nothing-found';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    InputSearchComponent,
    NothingFoundComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  receivedText: string = '';
  content: ContentNothingFound = {
    title: 'Nada foi encontrado',
    description: 'Tente realizar uma nova busca.'
  };

  onSearchTextChanged(text: string) {
    this.receivedText = text;
    console.log('Texto recebido:', this.receivedText);
  }

}
