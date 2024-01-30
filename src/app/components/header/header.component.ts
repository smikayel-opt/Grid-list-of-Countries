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
  constructor(public themeService: ThemeService) { }

  getThemeEnum() {
    return Theme
  }
}
