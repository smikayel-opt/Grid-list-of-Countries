import { ThemeService, Theme } from './theme.service';

describe('ThemeService', () => {
  let themeService: ThemeService;

  beforeEach(() => {
    themeService = new ThemeService();
  });

  it('should be created', () => {
    expect(themeService).toBeTruthy();
  });

  describe('getTheme', () => {
    it('should have a default theme of LIGHT', () => {
      expect(themeService.getTheme()).toBe(Theme.LIGHT);
    });
  });

  describe('changeTheme', () => {
    it('should change the theme', () => {
      themeService.changeTheme(Theme.DARK);
      expect(themeService.getTheme()).toBe(Theme.DARK);
    });
  });
});
