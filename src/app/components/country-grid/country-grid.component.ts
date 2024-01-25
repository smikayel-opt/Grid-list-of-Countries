import { Component } from '@angular/core';
import { CountryApiService } from '../../servicies/country-api.service';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from '../result-card/result-card.component';
import { FilterComponent } from '../filter/filter.component';


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

  constructor(private countryService: CountryApiService) { }

  ngOnInit() {
    this.getAllCountries()
  }

  /**
   * get all countries from the country service
   */
  getAllCountries(): void {
    this.countryService.all().subscribe(contries => {
      this.countries = contries
    })
  }

  /**
   * get filltered countries , filtered by country name
   * @param countryName 
   * @returns 
   */
  filterByName(countryName: string) {

    if (!countryName) {
      this.getAllCountries()
      return
    }

    this.countryService.searchByName(countryName).subscribe(
      (contries) => {
        this.countries = contries
      },
      (error) => {
        this.countries = []
      })
  }

  /**
   * get filltered countries , filtered by region
   * @param region 
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
