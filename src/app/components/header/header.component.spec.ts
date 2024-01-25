import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { Theme } from '../../servicies/theme/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('switchMode', () => {
    it('should change the theme and call themeService.changeTheme', () => {
      const initialTheme = component.theme;
      const expectedTheme = initialTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

      component.switchMode();

      expect(component.theme).toBe(expectedTheme);
    });
  });
});
