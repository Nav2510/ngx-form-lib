import { Component } from '@angular/core';
import { MASTER_CONFIG } from './form.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-form-lib';
  data = MASTER_CONFIG;

  onValueChanges(value: unknown) {
    console.log(value)
  }
}
