import { CountryApiService } from "./country-api.service";


/**
 * returns mock Country Service
 */
export function mockCountryApiService(): CountryApiService {
  return {
    API_URL: 'https://restcountries.com/v2/',
    http: jasmine.createSpyObj('HttpClient', ['get']),

    all: jasmine.createSpy('all'),
    searchByRegion: jasmine.createSpy('searchByRegion'),
    searchByName: jasmine.createSpy('searchByName'),
  };
}
