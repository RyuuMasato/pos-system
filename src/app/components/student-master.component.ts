import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';
import {Student} from "../model/student.model";
import {FirebaseService} from "../providers/firebase-service.provider";

@Component({
  selector: 'student-master-component',
  templateUrl: './student-master.component.html',
  styleUrls: ['./student-master.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class StudentMasterComponent implements OnInit{
  target: string = 'students';
  studentService: FirebaseService;
  students: FirebaseListObservable<any[]>;
  student: any;
  key: string;
  editable: boolean;
  newStudent: boolean;

  constructor(af: AngularFire) {
    this.studentService = new FirebaseService(af, this.target);
    this.editable = false;
    this.newStudent = false;
  }
  ngOnInit(): void {
    this.students = this.studentService.getList();
    this.students.subscribe((value)=>console.log(`students subscription: ${value}`));
  }
  toggleDeselect(): void {
    this.student = null;
  }
  toggleEditable(event): void {
    this.editable = event;
  }
  toggleNewStudent(event): void {
    this.newStudent = event;
  }
  onSelect(key: string): void {
    console.log(`setting student... - Event: ${key}`);
    this.student = null;
    this.student = this.studentService.getObject(key);
    this.editable = false;
    this.newStudent = false;
    this.key = key;
  }
  addStudent(event): void {
    console.log(`new student...`);
    this.student = this.studentService.objectToList(event);
  }
  updateStudent(event): void {
    console.log(`updating student... - Event: ${event}`);
    this.student.set(event);
  }
  removeStudent(event): void {
    console.log(`removing student... - Event: ${event}`);
    this.student.remove();
    this.toggleDeselect();
  }
}


//   name: event.name,
//   lastname: event.lastname,
//   streetname: event.streetname,
//   housenumber: event.housenumber,
//   addition: event.addition,
//   postalcode: event.postalcode,
//   city: event.city,
//   phone: event.phone,
//   email: event.email
