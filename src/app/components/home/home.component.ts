import { Component } from '@angular/core';
import { CountryGridComponent } from '../country-grid/country-grid.component';
import { HeaderComponent } from '../header/header.component';
import { FilterComponent } from '../filter/filter.component';
import { ResultCardComponent } from '../result-card/result-card.component';
import { CountryApiService } from '../../servicies/country-api.service';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CountryGridComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
