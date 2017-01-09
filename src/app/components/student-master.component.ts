import {Component, OnInit, Input} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from '../providers/firebase-service.provider';
import {Student} from "../model/student.model";
import {Subject} from "rxjs";

@Component({
  selector: 'student-master-component',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class StudentMasterComponent implements OnInit{
  firebaseService: FirebaseService;
  firebaseStudents: FirebaseListObservable<any[]>;
  firebaseStudent: FirebaseObjectObservable<any>;
  student: Subject<Student>;
  key: string;

  constructor(af: AngularFire) {
    this.firebaseService = new FirebaseService(af);
  }
  ngOnInit(): void {
    this.firebaseStudents = this.firebaseService.getFirebaseList('students');
  }
  onSelect(key: string): void {
    console.log(key);
    this.firebaseStudent = this.firebaseService.getFirebaseObject('students', key);
    this.logValue(this.firebaseStudent);
  }
  newStudent(): void {
    console.log('adding');
    this.firebaseStudent = this.firebaseService.newFirebaseObject('students');
    this.logValue(this.firebaseStudent);
  }
  saveStudent(event): void {
    console.log('saving...');
    this.firebaseStudents.update(event.key, event.value);
  }
  removeStudent(event): void {
    console.log('removing...');
    this.firebaseStudents.remove(event.key);
  }
  setStudentDetails(value): void {
    this.student.next({
      name: value.name,
      lastname: value.lastname,
      streetname: value.streetname,
      housenumber: value.housenumber,
      addition: value.addition,
      postalcode: value.postalcode,
      city: value.city,
      phone: value.phone,
      email: value.email
    });
  }
  logValue(firebaseObject: FirebaseObjectObservable<any>): void {
    firebaseObject.subscribe((value)=> {
      this.setStudentDetails(value);
      this.key = value.$key;
    });
    console.log(`Logged student: ${this.student.name} ${this.student.lastname}`);
  }
}
