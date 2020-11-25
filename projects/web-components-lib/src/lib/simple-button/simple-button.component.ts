import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'ilmn-simple-button',
  templateUrl: './simple-button.component.html',
  styleUrls: ['./simple-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SimpleButtonComponent implements OnInit {

  @Input() type: string = "button";

  @Input() label: string;

  @Input() disabled: boolean;

  @Input() style: any = {};

  @Input() styleClass: string;

  constructor() { }

  ngOnInit(): void {
  }

}
