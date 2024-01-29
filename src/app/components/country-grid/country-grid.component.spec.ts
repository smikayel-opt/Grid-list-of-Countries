import { CountryGridComponent } from './country-grid.component';
import { of, throwError } from 'rxjs';
import { Theme } from '../../servicies/theme/theme.service';
import { mockCountryData } from '../../servicies/country/country-api.service.spec';
import { ICountry } from '../../interfaces/country.interface';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('CountryGridComponent', () => {
  let component: CountryGridComponent;
  const countryApiServiceMock = jasmine.createSpyObj('mockCountryApiService', ['getAllCountries', 'searchByRegion', 'searchByName']);

  beforeEach(() => {
    component = new CountryGridComponent(mockThemeService(), countryApiServiceMock);
  });

  describe('ngOnInit', () => {
    it('should subscribe to themeService.themeSource', () => {
      expect(component.theme).toBe(Theme.LIGHT);
    });
    it('should call getAllCountries and subscribe to themeService.themeSource', () => {
      const getAllCountriesSpy = spyOn(component, 'getAllCountries');
      component.ngOnInit();
      expect(getAllCountriesSpy).toHaveBeenCalled();
    });
  });

  describe('getAllCountries', () => {
    it('should call countryService.all and update countries array', () => {
      const mockCountries: ICountry[] = mockCountryData
      countryApiServiceMock.getAllCountries.and.returnValue(of(mockCountries));
      component.getAllCountries();
      expect(countryApiServiceMock.getAllCountries).toHaveBeenCalled();
      expect(component.countries).toEqual(mockCountries);
    });
  });

  describe('filterByName', () => {
    it('should call countryService.searchByName and update countries array', () => {
      const mockCountries: ICountry[] = mockCountryData;
      countryApiServiceMock.searchByName.and.returnValue(of(mockCountries));
      component.filterByName('mockCountryName');
      expect(countryApiServiceMock.searchByName).toHaveBeenCalledWith('mockCountryName');
      expect(component.countries).toEqual(mockCountries);
    });

    it('should call countryService.searchByRegion and handle errors', () => {
      const errorResponse = 'Error fetching data';
      countryApiServiceMock.searchByName.and.returnValue(throwError(errorResponse));
      component.filterByName('mockName');
      expect(countryApiServiceMock.searchByName).toHaveBeenCalledWith('mockName');
      expect(component.countries).toEqual([]);
    });

    it('should call getAllCountries if countryName is falsy', () => {
      const getAllCountriesSpy = spyOn(component, 'getAllCountries');
      component.filterByName('');
      expect(getAllCountriesSpy).toHaveBeenCalled();
    });
  });

  describe('filterByRegion', () => {
    it('should call countryService.searchByRegion and update countries array', () => {
      const mockCountries: ICountry[] = mockCountryData;
      countryApiServiceMock.searchByRegion.and.returnValue(of(mockCountries));
      component.filterByRegion('mockRegion');
      expect(countryApiServiceMock.searchByRegion).toHaveBeenCalledWith('mockRegion');
      expect(component.countries).toEqual(mockCountries);
    });

    it('should call countryService.searchByRegion and handle errors', () => {
      const errorResponse = 'Error fetching data';
      countryApiServiceMock.searchByRegion.and.returnValue(throwError(errorResponse));
      component.filterByRegion('mockRegion');
      expect(countryApiServiceMock.searchByRegion).toHaveBeenCalledWith('mockRegion');
      expect(component.countries).toEqual([]);
    });

    it('should call getAllCountries if region is falsy', () => {
      const getAllCountriesSpy = spyOn(component, 'getAllCountries');
      component.filterByRegion('');
      expect(getAllCountriesSpy).toHaveBeenCalled();
    });
  });
});
