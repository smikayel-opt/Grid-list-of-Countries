import { Injectable } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  public API_URL = 'https://restcountries.com/v2/';

  constructor(public http: HttpClient) { }

  /**
   * api for fetching the data about all countries
   * @returns 
   */
  getAllCountries(): Observable<ICountry[]> {
    const query = 'all';
    return this.http.get<ICountry[]>(this.API_URL + query);
  }

  /**
   * 
   * @param region region name
   * @returns 
  */
  searchByRegion(region: string): Observable<ICountry[]> {
    const query = `region/${region}`;
    return this.http.get<ICountry[]>(this.API_URL + query);
  }

  /**
   * 
   * @param name country name
   * @returns 
   */
  searchByName(name: string): Observable<ICountry[]> {
    const query = `name/${name}`;
    return this.http.get<ICountry[]>(this.API_URL + query);
  }
}
