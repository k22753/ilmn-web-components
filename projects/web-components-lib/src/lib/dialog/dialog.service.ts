import { Injectable } from '@angular/core';
import { DialogComponent } from './dialog.component';
import { MdcDialog } from '@angular-mdc/web';

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  constructor(private dialog: MdcDialog) {}

  openModal(data) {
    const dialogRef = this.dialog.open(DialogComponent, {
      clickOutsideToClose: true,
      escapeToClose: true,
      buttonsStacked: false,
      data: data,
    });

    return dialogRef;
  }
}
