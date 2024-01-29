import { SearchInputComponent } from './search-input.component';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';
import { Theme } from '../../servicies/theme/theme.service';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;

  beforeEach(() => {
    component = new SearchInputComponent(mockThemeService());
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should set the theme based on the value from themeService.getTheme', () => {
      const expectedTheme = Theme.LIGHT;

      component.ngOnInit();
      expect(component.theme).toBe(expectedTheme);
    });
  });

  describe('onInputChange', () => {
    it('should emit onChange event with the value onInputChange', () => {
      const mockValue = 'mockValue';
      spyOn(component.onChange, 'emit');

      component.value = mockValue;
      component.onInputChange();

      expect(component.onChange.emit).toHaveBeenCalledWith(mockValue);
    });
  })
});
