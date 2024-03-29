import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() onCountryChange = new EventEmitter<string>();
  @Output() onSelectChange = new EventEmitter<string>();

  selectOptions: ISelect[] = [
    { title: "Filter By Region", value: "" },
    { title: "Africa", value: "Africa" },
    { title: "Asia", value: "Asia" },
    { title: "Europe", value: "Europe" },
    { title: "Oceania", value: "Oceania" },
  ]

  /**
  * when search changed it will send changed value to his own parent component
  * @param value which was changed in filter with (onSearchQueryChanged)
  */
  onSearchQueryChanged(value: string) {
    this.onCountryChange.emit(value)
  }

  /**
  * when selected region will be changed it will send to the component parrent with the event
  * @param value which was changed in filter with (onSelectedRegionChanged)
  */
  onSelectedRegionChanged(value: string) {
    this.onSelectChange.emit(value)
  }
}
