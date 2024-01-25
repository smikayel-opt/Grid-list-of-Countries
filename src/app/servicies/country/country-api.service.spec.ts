import { CountryApiService } from './country-api.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

export const mockCountryData = [{ "name": "Armenia", "topLevelDomain": [".am"], "alpha2Code": "AM", "alpha3Code": "ARM", "callingCodes": ["374"], "capital": "Yerevan", "altSpellings": ["AM", "Hayastan", "Republic of Armenia", "Հայաստանի Հանրապետություն"], "subregion": "Western Asia", "region": "Asia", "population": 2963234, "latlng": [40.0, 45.0], "demonym": "Armenian", "area": 29743.0, "gini": 29.9, "timezones": ["UTC+04:00"], "borders": ["AZE", "GEO", "IRN", "TUR"], "nativeName": "Հայաստան", "numericCode": "051", "flags": { "svg": "https://flagcdn.com/am.svg", "png": "https://flagcdn.com/w320/am.png" }, "currencies": [{ "code": "AMD", "name": "Armenian dram", "symbol": "֏" }], "languages": [{ "iso639_1": "hy", "iso639_2": "hye", "name": "Armenian", "nativeName": "Հայերեն" }], "translations": { "br": "Armenia", "pt": "Arménia", "nl": "Armenië", "hr": "Armenija", "fa": "ارمنستان", "de": "Armenien", "es": "Armenia", "fr": "Arménie", "ja": "アルメニア", "it": "Armenia", "hu": "Örményország" }, "flag": "https://flagcdn.com/am.svg", "regionalBlocs": [{ "acronym": "EEU", "name": "Eurasian Economic Union", "otherAcronyms": ["EAEU"] }], "cioc": "ARM", "independent": true }]

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

  describe('all', () => {
    it('should return an Observable<ICountry[]> with all countries data', () => {
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.all().subscribe((countries) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}all`);
    });
  });

  describe('searchByRegion', () => {
    it('should return an Observable<ICountry[]> with countries in the specified region', () => {
      const mockRegion = 'Europe';
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.searchByRegion(mockRegion).subscribe((countries) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}region/${mockRegion}`);
    });
  });

  describe('searchByName', () => {
    it('should return an Observable<ICountry[]> with countries matching the specified name', () => {
      const mockName = 'Germany';
      mockHttp.get.and.returnValue(of(mockCountryData));

      countryApiService.searchByName(mockName).subscribe((countries) => {
        expect(countries).toEqual(mockCountryData);
      });

      expect(mockHttp.get).toHaveBeenCalledWith(`${countryApiService.API_URL}name/${mockName}`);
    });
  });
});
