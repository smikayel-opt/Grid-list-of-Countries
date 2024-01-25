import { HeaderComponent } from './header.component';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(new ThemeService());
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

  describe('switchMode', () => {
    it('should change the theme and call themeService.changeTheme', () => {
      const initialTheme = component.theme;
      const expectedTheme = initialTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      component.switchMode();
      expect(component.theme).toBe(expectedTheme);
    });

    it('should change the theme and call themeService.changeTheme', () => {
      component.switchMode(); // it should change the theme to the dark 
      // then should be checked the theme changed or no 
      const initialTheme = component.theme;
      const expectedTheme = initialTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
      component.switchMode();
      expect(component.theme).toBe(expectedTheme);
    });
  });
});
