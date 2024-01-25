import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryGridComponent } from './country-grid.component';
import { BehaviorSubject, of, throwError } from 'rxjs';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';
import { CountryApiService } from '../../servicies/country/country-api.service';
import { mockCountryData } from '../../servicies/country/country-api.service.spec';
import { ICountry } from '../../interfaces/country.interface';

describe('CountryGridComponent', () => {
  let component: CountryGridComponent;
  const countryApiServiceMock = jasmine.createSpyObj('MovieService', ['all', 'searchByRegion', 'searchByName']);

  beforeEach(() => {
    component = new CountryGridComponent(new ThemeService(), countryApiServiceMock);
  });

  describe('ngOnInit', () => {
    it('should subscribe to themeService.theme$', () => {
      expect(component.theme).toBe(Theme.LIGHT);
    });
    it('should call getAllCountries and subscribe to themeService.theme$', () => {
      const getAllCountriesSpy = spyOn(component, 'getAllCountries');
      component.ngOnInit();
      expect(getAllCountriesSpy).toHaveBeenCalled();
    });
  });

  describe('getAllCountries', () => {
    it('should call countryService.all and update countries array', () => {
      const mockCountries: ICountry[] = mockCountryData
      countryApiServiceMock.all.and.returnValue(of(mockCountries));
      component.getAllCountries();
      expect(countryApiServiceMock.all).toHaveBeenCalled();
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
