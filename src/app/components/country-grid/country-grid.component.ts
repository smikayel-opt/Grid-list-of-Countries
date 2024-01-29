import { Component } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { ResultCardComponent } from '../../components/result-card/result-card.component';
import { FilterComponent } from '../../components/filter/filter.component';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';
import { CountryApiService } from '../../servicies/country/country-api.service';
import { CountryModalComponent } from '../country-modal/country-modal.component';

@Component({
  selector: 'app-country-grid',
  standalone: true,
  imports: [CommonModule, ResultCardComponent, FilterComponent, CountryModalComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})
export class CountryGridComponent {
  countries: ICountry[] = [];
  displayedCountries: ICountry[] = [];
  selectedRegion: string = '';
  searchCountryName: string = '';
  ModalState?: ICountry

  // Pagination settings
  itemsPerPage: number = 25;
  currentPage: number = 1;


  constructor(public themeService: ThemeService, private countryService: CountryApiService) { }

  /**
   * lifcicle method 
   */
  ngOnInit() {
    this.getAllCountries();
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
   * when we are searching it's should set the value of current page = 1 and then call the filting method
   * @param searchCountryName country name from the input value
   */
  onSearchInputChange(searchCountryName: string): void {
    this.currentPage = 1;
    this.searchCountryName = searchCountryName;
    this.filterByName(this.searchCountryName);
  }

  /**
   * filter the country by theyer name
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
   * get filltered countries , filtered by region
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
        this.updateDisplayedCountries();
      },
      (error) => {
        this.countries = [];
        this.updateDisplayedCountries();
      }
    );
  }

  /**
   * when we are changing the page, this function should change the current page number
   * and also it should update the data which should be shown in the page 
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

  /**
   * open modal and set the modal data value
   * @param country set the country data for the modal
   */
  openModal(country: ICountry) {
    this.ModalState = country
  }

  /**
   * close the modal 
   * the function which will close the modal 
   */
  closeModal() {
    this.ModalState = undefined
  }
}
