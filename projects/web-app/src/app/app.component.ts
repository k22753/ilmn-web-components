import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DialogService } from '@ilmn/components-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-app';
  seasons = [
    {
      label: 'Radio Group 1',
      formName: 'array1',
      id: '1',
      array: ['Winter', 'Spring', 'Summer', 'Autumn'],
    },
    {
      label: 'Radio Group 2',
      id: '2',
      formName: 'array2',
      array: ['Male', 'Female'],
    },
  ];

  form = new FormGroup({
    season: new FormControl(''),
    array1: new FormControl(''),
    array2: new FormControl(''),
  });

  task: any = {
    name: 'Indeterminate',
    completed: false,
    subtasks: [
      { name: 'Option 1', completed: true, disabled: true },
      { name: 'Option 2', completed: false, disabled: false },
      { name: 'Option 3', completed: false, disabled: false },
    ],
  };

  modalData = {
    dialogTitle: 'Do you want to exit the application?',
    dialogMessage: `Press 'Yes' to exit the application. Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application. Press 'Yes' to exit the application. Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application. Press 'Yes' to exit the application. Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application. Press 'Yes' to exit the application. Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.Press 'Yes' to exit the application.`,
    buttons: [
      {
        label: 'No, Take me back',
        style: 'secondary round',
      },
      {
        label: `Yes, I'M finished`,
        style: 'primary round',
      },
      {
        label: `Yes, I'M finished`,
        style: 'primary',
      },
    ],
  };

  allComplete: boolean = false;

  drawer = {
    open: false,

  };
  drawerOptions = [
    {
      link: '',
      label: 'About',
    },
    {
      link: '',
      label: 'Software Update',
    },
    {
      link: '',
      label: 'Settings',
    },
    {
      link: '',
      label: 'Process Management',
    },
  ];
  constructor(private dialogService: DialogService) { }

  updateAllComplete() {
    this.allComplete =
      this.task.subtasks != null &&
      this.task.subtasks.every((t) => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return (
      this.task.subtasks.filter((t) => t.completed).length > 0 &&
      !this.allComplete
    );
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach((t) => (t.completed = completed));
  }

  changeRadioEvent() {
    this.form.get('array2').setValue('');
    this.form.get('array1').setValue('');
  }

  openAlert() {
    const dialogRef = this.dialogService.openModal(this.modalData);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
