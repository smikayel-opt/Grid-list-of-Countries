import { Component, Input } from '@angular/core';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css'
})
export class ResultCardComponent {
  @Input() name: string = '';
  @Input() flag: string = '';
  @Input() population: number = 0;
  @Input() region: string = '';
  @Input() capital: string = '';

  constructor(public themeService: ThemeService) { }
}
