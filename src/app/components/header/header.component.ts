import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  theme: Theme = Theme.LIGHT;

  constructor(private themeService: ThemeService) { }

  /**
   * angular lifcicle method
   */
  ngOnInit() {
    this.theme = this.themeService.getTheme()
  }

  /**
   * switchMode function which changing the mode
   */
  switchMode() {
    const changedTheme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    this.themeService.changeTheme(changedTheme);
    this.theme = changedTheme;
  }
}
