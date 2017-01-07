import {Injectable} from "@angular/core";
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
