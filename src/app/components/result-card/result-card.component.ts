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

  theme: Theme = Theme.LIGHT

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => this.theme = theme);
  }
}
