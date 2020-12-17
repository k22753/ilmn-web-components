import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  allComplete: boolean = false;

  constructor() { }

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
}
