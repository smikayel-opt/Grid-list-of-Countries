import { Component } from '@angular/core';
import { CountryApiService } from '../../servicies/country-api.service';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';
import { ResultCardComponent } from '../result-card/result-card.component';
import { FilterComponent } from '../filter/filter.component';


@Component({
  selector: 'app-country-grid',
  standalone: true,
  imports: [CommonModule, LoadingComponent, ResultCardComponent, FilterComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})
export class CountryGridComponent {
  countries: ICountry[] = []
  isLoading: boolean = false
  page: number = 0
  totalPages: number = 0
  // selectedRegion: string = ''
  // searchCountryName: string = ''

  constructor(private countryService: CountryApiService) {
  }

  ngOnInit() {
    this.getAllMovies()
  }

  getAllMovies(): void {
    this.isLoading = true;
    this.countryService.all().subscribe(contries => {
      this.countries = contries
      this.isLoading = false;
    })
  }

  getNextPage(): void {
    if (this.page >= this.totalPages) return
    this.page += 1
  }

  getPreviousPage(): void {
    if (this.page == 1) return
    this.page = this.page - 1
  }

}
