import {Component, Input, Output} from '@angular/core';
import {AngularFire, FirebaseObjectObservable} from 'angularfire2';
import {FirebaseService} from "../providers/firebase-service.provider";
import {Student} from "../model/student.model";

@Component({
  selector: 'student-detail-component',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css'],
  providers: [AngularFire, FirebaseService]
})
export class StudentDetailComponent {
  @Input()
  student: Student;
  editable: boolean;

  toggleEditable(): void {
    this.editable = !this.editable;
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
