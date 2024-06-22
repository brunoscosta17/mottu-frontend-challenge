import { Component } from '@angular/core';
import { InputSearchComponent } from '../../core/components/input-search/input-search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputSearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  receivedText: string = '';

  onSearchTextChanged(text: string) {
    this.receivedText = text;
    console.log('Texto recebido:', this.receivedText);
  }

}
