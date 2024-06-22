import { Component, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-input-search',
  standalone: true,
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnDestroy {

  @Output() searchTextChanged = new EventEmitter<string>();

  private searchTextSubject = new Subject<string>();

  private subscription = this.searchTextSubject.pipe(
    debounceTime(300)
  ).subscribe((value) => {
    this.searchTextChanged.emit(value);
  });

  onTextChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchTextSubject.next(input.value);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onFocus() {
    const input = document.getElementById('floating-input');
    const label = document.querySelector('label[for="floating-input"]');

    if (input) input.classList.add('active');
    if (label) label.classList.add('active');
  }

  onBlur() {
    const input: HTMLInputElement = document.getElementById('floating-input') as HTMLInputElement;
    const label = document.querySelector('label[for="floating-input"]');

    if (input && input.value === '') input.classList.remove('active');
    if (label && input && input.value === '') label.classList.remove('active');
  }
}
