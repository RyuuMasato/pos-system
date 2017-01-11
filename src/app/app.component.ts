import { Component } from '@angular/core';
import {StudentMasterComponent} from "./components/student-master.component";

// todo: create calendar-component
// todo: create dashboard-component
// todo: create user-auth-component
// todo: create menu-component
// todo: setup router

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // todo: create receipt html 100% A4 directly printable or download as PDF
  styleUrls: ['./app.component.css'],
  providers: [StudentMasterComponent]
})
export class AppComponent {
  // todo: create model classes for workEntry
  // todo: firebase authentication
}
