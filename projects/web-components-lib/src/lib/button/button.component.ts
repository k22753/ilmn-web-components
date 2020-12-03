import {
  Component,
  OnInit,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ElementRef
} from '@angular/core';
import { Utils } from '../utils';

const BUTTON_HOST_ATTRIBUTES = [
  'primary',
  'secondary',
  'raised',
  'alternative',
  'link',
  'small'
];

@Component({
  selector: 'button[ilmn-button], a[ilmn-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent implements OnInit {

  @Input()
  get disabled(): boolean { return this._disabled; }
  set disabled(value: boolean) {
    const newValue = Utils.toBoolean(value);
    if (newValue !== this._disabled) {
      this._disabled = newValue;
      this.elementRef.nativeElement.disabled = this._disabled;
    }
  }
  private _disabled = false;

  constructor(public elementRef: ElementRef) {
    const classPrefix = 'ilmn-btn-';
    (elementRef.nativeElement as HTMLElement).classList.add('ilmn-btn');

    // For each of the variant selectors that is prevent in the button's host
    // attributes, add the correct corresponding class.
    BUTTON_HOST_ATTRIBUTES.forEach((attr) => {
      if (this._hasHostAttributes(attr)) {
        (elementRef.nativeElement as HTMLElement).classList.add(classPrefix + attr);
      }
    });
  }

  ngOnInit(): void {

  }

  private _getHostElement() {
    return this.elementRef.nativeElement;
  }

  private _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }
}
