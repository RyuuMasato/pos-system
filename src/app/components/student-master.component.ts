import {Component, OnInit, Input} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from '../providers/firebase-service.provider';

@Component({
  selector: 'master-component',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class MasterComponent implements OnInit{
  firebaseService: FirebaseService;
  students: FirebaseListObservable<any[]>;
  selectedStudent: FirebaseObjectObservable<any>;

  constructor(af: AngularFire) {
    this.firebaseService = new FirebaseService(af, 'students');
  }

  ngOnInit(): void {
    this.students = this.firebaseService.connectFirebaseList();
  }

  onSelect(student): void {
    this.selectedStudent = this.firebaseService.connectFirebaseObject(`${student.$key}`);
  }
}
