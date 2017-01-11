import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from "../providers/firebase-service.provider";
import {Student} from "../model/student.model";

@Component({
  selector: 'student-detail-component',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class StudentDetailComponent implements OnInit {
  @Input()  key:           string;
  @Input()  student:       Student;
  @Input()  editable:      boolean = false;
  @Input()  newStudent:    boolean = false;
  @Output() updateStudent: EventEmitter<Object> = new EventEmitter();
  @Output() removeStudent: EventEmitter<string> = new EventEmitter();
  @Output() addStudent:    EventEmitter<Object> = new EventEmitter();
  @Output() toggleEdit:    EventEmitter<boolean> = new EventEmitter();
  @Output() toggleNew:     EventEmitter<boolean> = new EventEmitter();

  ngOnInit() {
    console.log(this.student);
  }
  toggleEditable(value): void {
    this.toggleEdit.next(value);
  }
  toggleNewStudent(value): void {
    this.toggleNew.next(value);
  }
  toggleDeselect(): void {
    this.student = null;
    this.toggleEditable(false);
    this.toggleNewStudent(false);
  }
  setNewStudent(): void {
    this.student = new Student();
    this.toggleEditable(true);
    this.toggleNewStudent(true);
  }
  emitUpdateStudent(): void {
    console.log(this.student);
    let newStudent = new Student();
    newStudent.name = this.student.name;
    newStudent.lastname = this.student.lastname;
    newStudent.streetname = this.student.streetname;
    newStudent.housenumber = this.student.housenumber;
    newStudent.postalcode = this.student.postalcode;
    newStudent.city = this.student.city;
    newStudent.phone = this.student.phone;
    newStudent.email = this.student.email;
    if(this.newStudent) {
      this.addStudent.next(newStudent);
    }
    else {
      this.updateStudent.next(newStudent);
    }
    this.toggleEditable(false);
    this.toggleNewStudent(false);
  }
  emitRemoveStudent(): void {
    this.removeStudent.next(this.key);
    this.toggleDeselect();
  }
}
