import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;

  beforeEach(() => {
    component = new FilterComponent();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSearchQueryChanged', () => {
    it('should emit onCountryChange event with the given value', () => {
      const mockValue = 'mockValue';
      spyOn(component.onCountryChange, 'emit');
      component.onSearchQueryChanged(mockValue);

      expect(component.onCountryChange.emit).toHaveBeenCalledWith(mockValue);
    });
  });


  describe('onSelectedRegionChanged', () => {
    it('should emit onSelectChange event with the given value', () => {
      const mockValue = 'mockValue';
      spyOn(component.onSelectChange, 'emit');

      component.onSelectedRegionChanged(mockValue);
      expect(component.onSelectChange.emit).toHaveBeenCalledWith(mockValue);
    });
  });
});
