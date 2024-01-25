import { CountryApiService } from "./country-api.service";


/**
 * returns mock Movies Service
 */
export function mockCompanyApiService(): CountryApiService {
  return {
    API_URL: 'https://restcountries.com/v2/',
    http: jasmine.createSpyObj('HttpClient', ['get']),

    all: jasmine.createSpy('all'),
    searchByRegion: jasmine.createSpy('searchByRegion'),
    searchByName: jasmine.createSpy('searchByName'),
  };
}
