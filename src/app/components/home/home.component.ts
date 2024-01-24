import { Component } from '@angular/core';
import { CountryGridComponent } from '../country-grid/country-grid.component';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { ResultCardComponent } from '../result-card/result-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryGridComponent, HeaderComponent, FilterComponent, ResultCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  name = 'Aasfasfasf'
  imageUrl = 'https://picsum.photos/id/1011/800/450'
  content = 'asdasdasdsad'
  readMoreLink = '#'
}
