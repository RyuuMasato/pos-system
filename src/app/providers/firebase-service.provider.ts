import { Injectable } from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  private firebaseRef: AngularFire;
  constructor(private af: AngularFire) {
    this.firebaseRef = af;
  }
  getFirebaseList(target: string): FirebaseListObservable<any[]> {
    return this.firebaseRef.database.list(target);
  }
  getFirebaseObject(target: string, key: string): FirebaseObjectObservable<any> {
    return this.firebaseRef.database.object(`/${target}/${key}`);
  }
  newFirebaseObject(target: string): FirebaseObjectObservable<any> {
    return this.getFirebaseObject(target, this.getFirebaseList(target).push({}).key);
  }
  setFirebaseObject(target: string, value: Object): void {
    this.newFirebaseObject(target).set(value);
  }
  removeFirebaseObject(target: string, key: string): void {
    this.getFirebaseObject(target, key).remove();
  }
}






// {
//   path: string;
//   angularFire: AngularFire;
//   connectedFirebaseObject: FirebaseObjectObservable<any>;
//   connectedFirebaseList: FirebaseListObservable<any[]>;
//
//   constructor(af: AngularFire, path: string) {
//     this.angularFire = af;
//     this.path = path;
//   }
//
//   connectFirebaseList(): FirebaseListObservable<any[]> {
//     this.connectedFirebaseList = this.angularFire.database.list(`${this.path}`);
//     this.connectedFirebaseList.subscribe(
//       ()=> console.log('success'),
//       (error)=> console.log(error),
//       ()=> console.log('complete')
//     );
//     return this.connectedFirebaseList;
//   }
//
//   connectFirebaseObject(key: string): FirebaseObjectObservable<any> {
//     this.connectedFirebaseObject = this.angularFire.database.object(`${this.path}/${key}`);
//     this.connectedFirebaseObject.subscribe(
//       ()=> console.log('success'),
//       (error)=> console.log(error),
//       ()=> console.log('complete')
//     );
//     return this.connectedFirebaseObject;
//   }
//
//   createObject(key: string, object: any): FirebaseObjectObservable<any> {
//     this.connectFirebaseObject(key).set(object);
//     return this.connectedFirebaseObject;
//   }
//
//   addToList(object: any): FirebaseObjectObservable<any> {
//     return this.connectFirebaseObject(this.connectedFirebaseList.push(object).key);
//   }
// }
