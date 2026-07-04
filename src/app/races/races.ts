import { Component, signal } from '@angular/core';

@Component({
  selector: 'pr-races',
  imports: [],
  templateUrl: './races.html',
  styleUrl: './races.css'
})
export class Races {
  protected readonly races = signal([
    { id: 1, name: 'Lyon' },
    { id: 2, name: 'London' }
  ]);
}
