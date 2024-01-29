import { Component } from '@angular/core';
import { CountryApiService } from '../../servicies/country/country-api.service';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from '../result-card/result-card.component';
import { FilterComponent } from '../filter/filter.component';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

@Component({
  selector: 'app-country-grid',
  standalone: true,
  imports: [CommonModule, ResultCardComponent, FilterComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})
export class CountryGridComponent {
  countries: ICountry[] = []
  selectedRegion: string = ''
  searchCountryName: string = ''
  theme: Theme = Theme.LIGHT

  constructor(private themeService: ThemeService, private countryService: CountryApiService) { }

  ngOnInit() {
    this.getAllCountries()
    this.themeService.themeSource.subscribe(theme => this.theme = theme);
  }

  /**
   * get all countries from the country service
   */
  getAllCountries(): void {
    this.countryService.getAllCountries().subscribe((contries: ICountry[]) => {
      this.countries = contries
    })
  }

  /**
   * get filltered countries , filtered by country name
   * @param countryName  the country name 
   * @returns 
   */
  filterByName(countryName: string) {

    if (!countryName) {
      this.getAllCountries()
      return
    }

    this.countryService.searchByName(countryName).subscribe(
      (contries: ICountry[]) => {
        this.countries = contries
      },
      (error) => {
        this.countries = []
      })
  }

  /**
   * get filltered countries , filtered by region
   * @param region the region name
   * @returns 
   */
  filterByRegion(region: string) {
    if (!region) {
      this.getAllCountries()
      return
    }

    this.countryService.searchByRegion(region).subscribe(
      (contries) => {
        this.countries = contries
      },
      (error) => {
        this.countries = []
      }
    )
  }
}
