import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICountry } from '../../interfaces/country.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-country-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './country-modal.component.html',
  styleUrl: './country-modal.component.css'
})
export class CountryModalComponent {
  @Output() onClose = new EventEmitter();
  @Input() country?: ICountry;

  constructor() { }

  /**
   * close the modal
   */
  handleOnClose() {
    this.onClose.emit()
  }
}
