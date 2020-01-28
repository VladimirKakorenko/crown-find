import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-base-text-field',
  templateUrl: './base-text-field.component.html',
  styleUrls: ['./base-text-field.component.scss'],
})
export class BaseTextFieldComponent {
  @Input() readonly label: string;
  @Input() readonly control: FormControl = new FormControl();
  @Input() readonly isNumber: boolean = false;

  get fieldType(): string {
    return this.isNumber
      ? 'number'
      : 'text';
  }
}
