import { Component, Input } from '@angular/core';
import { PropertiesActionButton } from '../../models/properties-action-button';
import { ContentNothingFound } from '../../models/content-nothing-found';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nothing-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nothing-found.component.html',
  styleUrl: './nothing-found.component.scss'
})
export class NothingFoundComponent {

  @Input() content!: ContentNothingFound;
  @Input() hasActionButton: boolean = false;
  @Input() propertiesActionButton!: PropertiesActionButton;

  constructor(private _router: Router) {}

  onClick(propertiesActionButton: PropertiesActionButton) {
    this._router.navigate([propertiesActionButton.url]);
  }

}
