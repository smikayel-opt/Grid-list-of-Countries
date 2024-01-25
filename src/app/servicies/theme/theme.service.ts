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
  private themeSource = new BehaviorSubject<Theme>(Theme.LIGHT);
  theme$ = this.themeSource.asObservable();

  changeTheme(theme: Theme) {
    this.themeSource.next(theme);
  }

  getTheme() {
    return this.themeSource.value
  }
}
