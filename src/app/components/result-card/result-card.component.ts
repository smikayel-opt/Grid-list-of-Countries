import { Component, Input } from '@angular/core';

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
  @Input() population: string = '';
}
