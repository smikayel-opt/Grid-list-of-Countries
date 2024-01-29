import { ResultCardComponent } from './result-card.component';
import { Theme } from '../../servicies/theme/theme.service';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('ResultCardComponent', () => {
  let component: ResultCardComponent;

  beforeEach(() => {
    component = new ResultCardComponent(mockThemeService());
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
