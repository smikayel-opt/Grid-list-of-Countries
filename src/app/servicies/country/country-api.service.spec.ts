import { CountryApiService } from './country-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ICountry } from '../../interfaces/country.interface';

export const mockCountryData = [{ "name": "Armenia", "alpha2Code": "AM",} as ICountry]

describe('CountryApiService', () => {
  let countryApiService: CountryApiService;
  let mockHttp: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('HttpClient', ['get']);
    countryApiService = new CountryApiService(mockHttp);
  });

  it('should be created', () => {
    expect(countryApiService).toBeTruthy();
  });

  describe('getAllCountries', () => {
    it('should return an Observable<ICountry[]> with getAllCountries countries data', () => {
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.getAllCountries().subscribe((countries: ICountry[]) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}all`);
    });
  });

  describe('searchByRegion', () => {
    it('should return an Observable<ICountry[]> with countries in the specified region', () => {
      const mockRegion = 'Europe';
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.searchByRegion(mockRegion).subscribe((countries: ICountry[]) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}region/${mockRegion}`);
    });
  });

  describe('searchByName', () => {
    it('should return an Observable<ICountry[]> with countries matching the specified name', () => {
      const mockName = 'Germany';
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.searchByName(mockName).subscribe((countries: ICountry[]) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}name/${mockName}`);
    });
  });
});
