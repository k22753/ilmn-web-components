import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'web-app';

  inlineStyle = {
    fontSize: '22px',
    padding: '10px 20px',
  };

  constructor() {}

  buttonOnClick() {
    console.log('Button Click');
  }
}
