import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
