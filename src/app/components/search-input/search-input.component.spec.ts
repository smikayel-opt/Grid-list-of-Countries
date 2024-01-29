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
