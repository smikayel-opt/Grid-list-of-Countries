import { TestBed } from '@angular/core/testing';

import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});


import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Theme } from './header.component'; // Import your Theme enum

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private themeSource = new BehaviorSubject<Theme>(Theme.LIGHT);
  theme$ = this.themeSource.asObservable();

  changeTheme(theme: Theme) {
    this.themeSource.next(theme);
  }
}
