import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  theme: Theme = Theme.LIGHT

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.theme = this.themeService.getTheme()
  }

  switchMode() {
    const changedTheme = this.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    this.themeService.changeTheme(changedTheme);
    this.theme = changedTheme
  }
}
