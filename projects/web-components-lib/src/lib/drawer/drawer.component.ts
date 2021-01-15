import { Component, Input } from '@angular/core';

@Component({
  selector: 'ilmn-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent {
  @Input() drawer: any = {};
  constructor() {}
}
