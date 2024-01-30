import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ThemeService } from '../../servicies/theme/theme.service';

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
  @Input() selectedOption: string = '';
  @Input() selectOptions: ISelect[] = [];
  @Output() onChange = new EventEmitter<string>();

  constructor(public themeService: ThemeService) { }

  /*
  * when the selected region will be changed it should give the event, so in the parrent component we can get access to
  * the changed value...
  */
  onSelectedOptionChange(): void {
    this.onChange.emit(this.selectedOption);
  }

}
