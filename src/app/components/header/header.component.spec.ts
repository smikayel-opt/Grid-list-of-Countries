import { HeaderComponent } from './header.component';
import { Theme } from '../../servicies/theme/theme.service';
import { mockThemeService } from '../../servicies/theme/theme.service.mock';

describe('HeaderComponent', () => {
  let component: HeaderComponent;

  beforeEach(() => {
    component = new HeaderComponent(mockThemeService());
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('getThemeEnum', () => {
    it('should return the Theme enum', () => {
      const result = component.getThemeEnum();
      expect(result).toEqual(Theme);
    });
  });
});
