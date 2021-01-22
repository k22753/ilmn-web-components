import { Component, Input } from '@angular/core';

@Component({
  selector: 'ilmn-text-field',
  templateUrl: './text-field.component.html',
})
export class TextFieldComponent {
  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value || '';
  }
  private _name = '';

  @Input()
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value || '';
  }
  private _label = '';

  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || '';
  }
  private _id = '';

  @Input()
  get helper(): string {
    return this._helper;
  }
  set helper(value: string) {
    this._helper = value || '';
  }
  private _helper = '';

  constructor(
  ) {}

  getClass(value = '') {
    if (value) {
      let splitClass = value.split(' ');
      return 'ilmn-btn-' + splitClass.join(' ilmn-btn-');
    }
    return '';
  }
}
