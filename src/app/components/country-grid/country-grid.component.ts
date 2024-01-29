import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from '../../components/result-card/result-card.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';
import { CountryApiService } from '../../servicies/country/country-api.service';

@Component({
  selector: 'app-country-grid',
  standalone: true,
  imports: [CommonModule, ResultCardComponent, FilterComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})
export class CountryGridComponent {
  countries: ICountry[] = [];
  displayedCountries: ICountry[] = [];
  selectedRegion: string = '';
  searchCountryName: string = '';
  theme: Theme = Theme.LIGHT;

  // Pagination settings
  itemsPerPage: number = 25;
  currentPage: number = 1;


  constructor(private themeService: ThemeService, private countryService: CountryApiService) { }

  ngOnInit() {
    this.getAllCountries();
    this.themeService.themeSource.subscribe(theme => this.theme = theme);
  }
  /**
   * get all countries it will make call with api service
   */
  getAllCountries(): void {
    this.countryService.getAllCountries().subscribe((countries: ICountry[]) => {
      this.countries = countries;
      this.updateDisplayedCountries();
    });
  }

  /**
   * will imitate the pagination
   */
  updateDisplayedCountries(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.displayedCountries = this.countries.slice(startIndex, endIndex);
  }

  /**
   * 
   * @param searchCountryName country name from the input value
   */
  onSearchInputChange(searchCountryName: string): void {
    this.currentPage = 1;
    this.searchCountryName = searchCountryName;
    this.filterByName(this.searchCountryName);
  }

  /**
   * 
   * @param countryName country name for the filtration
   * @returns 
   */
  filterByName(countryName: string): void {
    this.currentPage = 1;
    if (!countryName) {
      this.getAllCountries();
      return;
    }

    this.countryService.searchByName(countryName).subscribe(
      (countries: ICountry[]) => {
        this.countries = countries;
        this.updateDisplayedCountries();
      },
      (error) => {
        this.countries = [];
        this.updateDisplayedCountries();
      });
  }

  /**
   * 
   * @param region region name for the filtring with region 
   * @returns 
   */
  filterByRegion(region: string): void {
    if (!region) {
      this.getAllCountries();
      return;
    }

    this.countryService.searchByRegion(region).subscribe(
      (countries) => {
        this.countries = countries;
        console.log(countries)
        this.updateDisplayedCountries();
      },
      (error) => {
        this.countries = [];
        this.updateDisplayedCountries();
      }
    );
  }

  /**
   * 
   * @param newPage new page numer, for the changing the page
   */
  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.updateDisplayedCountries();
  }

  /**
   * in some cases the total page ocunt can be like 0.04 (which is because 
   * for e.g. after search the page count 1 and it should show the 25 results 1/25 )
   * @returns 
   */
  getTotalPages(): number {
    return Math.ceil(this.countries.length / this.itemsPerPage);
  }
}
