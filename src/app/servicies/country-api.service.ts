import { Injectable } from '@angular/core';
import { ICountry } from '../interfaces/country.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryApiService {
  private API_URL = 'https://restcountries.com/v2/'

  constructor(private http: HttpClient) { }

  all(): Observable<ICountry[]> {
    const query = 'all'
    return this.http.get<ICountry[]>(this.API_URL + query)
  }
}
