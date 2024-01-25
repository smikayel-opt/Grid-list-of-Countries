import { Injectable } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  public API_URL = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) { }

  /*
  * api for fetching the data about all countries
  */
  all(): Observable<ICountry[]> {
    const query = 'all'
    return this.http.get<ICountry[]>(this.API_URL + query)
  }

  /*
  * search by region name like "Asia"
  */
  searchByRegion(region: string): Observable<ICountry[]> {
    const query = `region/${region}`
    return this.http.get<ICountry[]>(this.API_URL + query)
  }

  /*
  * search by country name like "Armenia"
  */
  searchByName(name: string): Observable<ICountry[]> {
    const query = `name/${name}`
    return this.http.get<ICountry[]>(this.API_URL + query)
  }
}
