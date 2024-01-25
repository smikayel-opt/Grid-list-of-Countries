import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponent } from './search-input.component';

describe('SearchInputComponent', () => {
  let component: SearchInputComponent;
  let fixture: ComponentFixture<SearchInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
