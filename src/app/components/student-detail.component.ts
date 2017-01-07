import { Component } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

// todo: abstract master-component and detail-component from this class
// todo: create calendar-component
// todo: create dashboard-component
// todo: create user-auth-component
// todo: create menu-component
// todo: setup router

@Component({
  selector: 'detail-component',
  templateUrl: './app.component.html',
  // todo: create receipt html 100% A4 directly printable or download as PDF
  styleUrls: ['./app.component.css']
})
export class DetailComponent {
  // todo: create model classes for contact and workEntry
  // todo: firebase authentication
  // todo: firebase file saving and hosting

  angularFire: AngularFire;
  items: FirebaseListObservable<any[]>;
  selectedItem: FirebaseObjectObservable<any>;

  constructor(private af: AngularFire) {
    this.angularFire = af;
    this.items = af.database.list('/items');
  }

  onSelect(item): void {
    this.selectedItem = this.angularFire.database.object(`/items/${item.$key}`);
    console.log(this.selectedItem);
  }

  updateItem(value): void {
    this.selectedItem.set({name:value});
  }

  createItem(value: string): void {
    this.selectedItem = this.angularFire.database.object(`/items/${this.items.push({name: value}).key}`);
  }

  removeItem(): void {
    this.selectedItem.remove();
  }

}
