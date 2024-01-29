import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  public themeSource = new BehaviorSubject<Theme>(Theme.LIGHT);

  /**
  * will change the theme source from dark to light.. or from the light to the dark
  * @param theme
  */
  changeTheme(theme: Theme) {
    this.themeSource.next(theme);
  }

  /**
   * 
   * @returns 
   */
  getTheme() {
    return this.themeSource.value
  }
}
