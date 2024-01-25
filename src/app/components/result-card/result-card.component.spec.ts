import { ResultCardComponent } from './result-card.component';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;

  beforeEach(() => {
    component = new ResultCardComponent(new ThemeService());
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

});
