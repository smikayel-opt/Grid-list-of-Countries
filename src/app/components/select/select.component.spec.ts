import { SelectComponent } from './select.component';
import { Theme } from '../../servicies/theme/theme.service';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('SelectComponent', () => {
  let component: SelectComponent;

  beforeEach(() => {
    component = new SelectComponent(mockThemeService());
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

  describe('onSelectedOptionChanged', () => {
    it('should emit onChange event with the value onInputChange', () => {
      const mockValue = 'mockValue';
      spyOn(component.onChange, 'emit');

      component.selectedOption = mockValue;
      component.onSelectedOptionChange();

      expect(component.onChange.emit).toHaveBeenCalledWith(mockValue);
    });
  })
});
