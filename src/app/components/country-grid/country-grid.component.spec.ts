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

  describe('getTotalPages', () => {
    it('should return the correct number of pages when countries.length is divisible by itemsPerPage', () => {
      const country = {} as ICountry
      component.countries = [country, country, country, country, country, country, country, country, country, country];
      component.itemsPerPage = 3;

      const result = component.getTotalPages();

      expect(result).toBe(4); // 10 items / 3 itemsPerPage = 3.33 (rounded up to 4)
    });

    it('should return the correct number of pages when countries.length is not divisible by itemsPerPage', () => {
      const country = {} as ICountry
      component.countries = [country, country, country, country, country, country, country, country, country];
      component.itemsPerPage = 4;

      const result = component.getTotalPages();

      expect(result).toBe(3); // 9 items / 4 itemsPerPage = 2.25 (rounded up to 3)
    });

    it('should return 0 when countries array is empty', () => {
      component.countries = [];
      component.itemsPerPage = 5;

      const result = component.getTotalPages();

      expect(result).toBe(0);
    });

    it('should return 1 when itemsPerPage is greater than or equal to the length of countries array', () => {
      const country = {} as ICountry
      component.countries = [country, country, country];
      component.itemsPerPage = 3;

      const result = component.getTotalPages();

      expect(result).toBe(1);
    });
  });

  describe('onPageChange', () => {
    it('should update currentPage when a new page is selected', () => {
      component.currentPage = 1;
      component.onPageChange(2);
      expect(component.currentPage).toBe(2);
    });

    it('should call updateDisplayedCountries when a new page is selected', () => {
      spyOn(component, 'updateDisplayedCountries');

      component.onPageChange(3);
      expect(component.updateDisplayedCountries).toHaveBeenCalled();
    });
  });


  describe('onSearchInputChange', () => {
    it('should call filterByName with the updated searchCountryName when search input changes', () => {
      spyOn(component, 'filterByName');
      component.onSearchInputChange('NewCountry');
      expect(component.filterByName).toHaveBeenCalledWith('NewCountry');
    });
  });

  describe('openModal', () => {
    it('should set ModalState to the provided country', () => {
      const countryMock: ICountry = {} as ICountry;
      component.openModal(countryMock);
      expect(component.ModalState).toEqual(countryMock);
    });
  });

  describe('closeModal', () => {
    it('should set ModalState to undefined', () => {
      component.ModalState = {} as ICountry;
      component.closeModal();
      expect(component.ModalState).toBeUndefined();
    });
  });
});
