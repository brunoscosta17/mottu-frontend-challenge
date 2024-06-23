import { Component } from '@angular/core';
import { NothingFoundComponent } from '../../core/components/nothing-found/nothing-found.component';
import { ContentNothingFound } from '../../core/models/content-nothing-found';
import { PropertiesActionButton } from '../../core/models/properties-action-button';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [NothingFoundComponent],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss'
})
export class FavoritesComponent {

  contentNothingFound: ContentNothingFound = {
    title: 'Parece que você ainda não tem favoritos',
    description: 'Volte à página inicial e escolha os melhores para você.'
  };
  propertiesActionButton: PropertiesActionButton = {
    label: 'Voltar ao início',
    url: '/'
  };

}
