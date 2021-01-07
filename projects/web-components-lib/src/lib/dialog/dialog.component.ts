import { Component, Inject } from '@angular/core';
import { MdcDialogRef, MDC_DIALOG_DATA } from '@angular-mdc/web';

@Component({
  selector: 'ilmn-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  constructor(
    public dialogRef: MdcDialogRef<DialogComponent>,
    @Inject(MDC_DIALOG_DATA) public data: any
  ) {}

  getClass(value = '') {
    if (value) {
      let splitClass = value.split(' ');
      return 'ilmn-btn-' + splitClass.join(' ilmn-btn-');
    }
    return '';
  }
}
