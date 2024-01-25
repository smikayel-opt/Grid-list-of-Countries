import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Theme, ThemeService } from '../../servicies/theme/theme.service';

@Component({
  selector: 'app-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
  value: string = ''
  @Output() onChange = new EventEmitter<string>();
  theme: Theme = Theme.LIGHT

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.themeService.theme$.subscribe(theme => this.theme = theme);
  }

  /*
  * On Input value change the function should be called so it will allow to gt the changed vaue from the parrent 
  */
  onInputChange(): void {
    this.onChange.emit(this.value);
  }
}
