import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchInputComponent } from '../search-input/search-input.component';
import { ISelect, SelectComponent } from '../select/select.component';


@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [FormsModule, SearchInputComponent, SelectComponent],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {
  searchQuery: string = '';
  selectOptions: ISelect[] = [
    {title: "Africa", value: "Africa"},
    {title: "America", value: "America"},
    {title: "Asia", value: "Asia"},
    {title: "Europe", value: "Europe"},
    {title: "Oceania", value: "Oceania"},
  ]

}
