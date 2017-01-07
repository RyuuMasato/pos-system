import {Component, OnInit, Input} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from '../providers/firebase-service.provider';
import {Student} from "../model/student.model";

@Component({
  selector: 'student-master-component',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css'],
  providers: [AngularFire, FirebaseService],
})
export class StudentMasterComponent implements OnInit{
  firebaseService: FirebaseService;
  firebaseStudents: FirebaseListObservable<any[]>;
  firebaseStudent: FirebaseObjectObservable<any>;
  student: Student;

  constructor(af: AngularFire) {
    this.firebaseService = new FirebaseService(af);
  }
  ngOnInit(): void {
    this.firebaseStudents = this.firebaseService.getFirebaseList('students');
  }
  onSelect(key: string): void {
    this.firebaseStudent = this.firebaseService.getFirebaseObject('students', key);
    this.logValue(this.firebaseStudent);
  }
  newStudent(): void {
    this.firebaseStudent = this.firebaseService.newFirebaseObject('students');
    this.logValue(this.firebaseStudent);
  }
  saveStudent(value: Object): void {
    this.firebaseService.setFirebaseObject('students', value);
  }
  removeStudent(key: string): void {
    this.firebaseService.removeFirebaseObject('students', key);
  }
  setStudentDetails(value): void {
    this.student = {
      name: value.name,
      lastname: value.lastname,
      streetname: value.streetname,
      housenumber: value.housenumber,
      addition: value.addition,
      postalcode: value.postalcode,
      city: value.city,
      phone: value.phone,
      email: value.email
    }
  }
  logValue(firebaseObject: FirebaseObjectObservable<any>): void {
    firebaseObject.subscribe((value)=>this.setStudentDetails(value));
    console.log(`Logged student: ${this.student.name} ${this.student.lastname}`);
  }
}
