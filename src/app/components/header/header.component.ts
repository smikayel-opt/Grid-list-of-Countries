import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  theme: Theme = Theme.LIGHT

  swichMode() {
    this.theme = (this.theme === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT

    console.log(this.theme)
  }
}
