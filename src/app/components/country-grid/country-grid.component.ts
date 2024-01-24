import { Component } from '@angular/core';
import { CountryApiService } from '../../servicies/country-api.service';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from '../loading/loading.component';


@Component({
  selector: 'app-country-grid',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './country-grid.component.html',
  styleUrl: './country-grid.component.css'
})
export class CountryGridComponent {
  countries: ICountry[] = []
  loading: boolean = false

  constructor(private countriesSerivce: CountryApiService) {

  }

  ngOnInit() {
    this.loading = true
    this.countriesSerivce.all().subscribe(countriesData => {
      this.countries = countriesData      
      console.log(this.countries)
      this.loading = false
    })
  }
}
