import {Component, Input, Output, EventEmitter} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from "../providers/firebase-service.provider";
import {Student} from "../model/student.model";
import {Subject} from "rxjs";

@Component({
  selector: 'student-detail-component',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class StudentDetailComponent {
  @Input()  key:           string;
  @Input()  student:       Subject<Student>;
            editable:      boolean = false;

  ngOnInit() {
    this.student.subscribe(value => console.log(value));
  }
  toggleEditable(): void {
    this.editable = !(this.editable);
  }
  emitAddStudent(): void {
    this.student.next();
    this.toggleEditable();
  }
  emitUpdateStudent(): void {
    this.student.next({student: this.student, key: this.key});
    this.toggleEditable();
  }
  emitRemoveStudent(): void {
    this.student.next({key: this.key});
  }


  // ngOnInit() {
  //   this.cleanStudent();
  //   this.updateLocal();
  // }
  //
  // ngOnChanges() {
  //   this.updateLocal();
  // }
  //
  // toggleEditable(): void {
  //   this.editable = !this.editable;
  // }
  //
  // updateStudent(): void {
  //   this.firebaseStudent.set(this.student);
  //   this.toggleEditable();
  // }
  //
  // removeStudent(): void {
  //   this.firebaseStudent.remove();
  //   this.cleanStudent();
  // }
  //
  // updateLocal(): void {
  //   this.firebaseStudent.subscribe((value)=> {
  //     if(value!=null)
  //       this.student = value;
  //   });
  // }
  //
  // cleanStudent(): void {
  //   this.student = new Student();
  // }
}
