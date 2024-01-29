import { SelectComponent } from './select.component';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('SelectComponent', () => {
  let component: SelectComponent;

  beforeEach(() => {
    component = new SelectComponent(mockThemeService());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
