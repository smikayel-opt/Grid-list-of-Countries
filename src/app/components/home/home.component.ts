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
  imageUrl = 'https://flagcdn.com/ca.svg'
  population = '5.4 M'
  region = 'Region'
  capital = '6.3M'

  
}
