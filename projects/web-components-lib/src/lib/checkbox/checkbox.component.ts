import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
//import { CustomCheckBoxModel } from 'angular-custom-checkbox';

enum inputTypeEnum {
  radio = 'radio',
  checkbox = 'checkbox',
}

@Component({
  selector: 'ilmn-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class CheckboxComponent implements OnInit {
  // public radioConfiguration: CustomCheckBoxModel = new CustomCheckBoxModel();

  @Input() isSelected?: boolean = false;
  @Input() disabled?: boolean = false;
  @Input() indeterminate = false;

  @Input()
  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value || '';
  }
  private _label = '';

  @Input()
  get type(): string {
    return this._type;
  }
  set type(value: string) {
    this._type = value || inputTypeEnum.checkbox;
  }
  private _type = 'checkbox';

  /** Input name of the element. */
  @Input()
  get name(): string {
    return this._name;
  }
  set name(value: string) {
    this._name = value || '';
  }
  private _name = '';

  @Input()
  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value || '';
  }
  private _id = '';

  @ViewChild('inputControl', { static: false }) inputControl: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    if (this.indeterminate && this.isSelected === null) {
      this.renderer.setAttribute(
        this.inputControl.nativeElement,
        'indeterminate',
        'true'
      );
    }
  }

  /** Checks for indeterminate attribute and removes indeterminate state when clicked */
  public changeState(): void {
    if (this.indeterminate) {
      if (this.isSelected === false) {
        this.renderer.setAttribute(
          this.inputControl.nativeElement,
          'indeterminate',
          'true'
        );
      } else {
        this.renderer.removeAttribute(
          this.inputControl.nativeElement,
          'indeterminate'
        );
      }
    }
  }
}
