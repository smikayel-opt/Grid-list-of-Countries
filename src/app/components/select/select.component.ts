import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface ISelect {
  title: string
  value: string
}

@Component({
  selector: 'app-select',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './select.component.html',
  styleUrl: './select.component.css'
})
export class SelectComponent {
  selectedOption: string = '';
  @Input() name: string = '';
  @Input() selectOptions: ISelect[] = []

}
