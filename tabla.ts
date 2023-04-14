import { Component } from '@angular/core';
import { SERIES } from './data';

@Component({
  selector: 'app-series-table',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Channel</th>
          <th>Seasons</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let serie of series">
          <td>{{ serie.id }}</td>
          <td>{{ serie.name }}</td>
          <td>{{ serie.channel }}</td>
          <td>{{ serie.seasons }}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class SeriesTableComponent {
  series = SERIES;
}

