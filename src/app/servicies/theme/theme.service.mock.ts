import { BehaviorSubject } from "rxjs";
import { Theme, ThemeService } from "./theme.service";

export function mockThemeService(): ThemeService {
  const themeSource = new BehaviorSubject<Theme>(Theme.LIGHT);

  return {
    themeSource: themeSource,
    changeTheme: jasmine.createSpy('changeTheme'),
    getTheme: jasmine.createSpy('getTheme').and.returnValue(themeSource.value),
  }
}
