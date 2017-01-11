import {Injectable} from "@angular/core";
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2';

@Injectable()
export class FirebaseService {
  firebaseRef: AngularFire;
  target: string;
  constructor(af: AngularFire, t: string) {
    this.firebaseRef = af;
    this.target = t;
  }
  getList(): FirebaseListObservable<any[]> {
    return this.firebaseRef.database.list(this.target);
  }
  getObject(key: string): FirebaseObjectObservable<any> {
    return this.firebaseRef.database.object(`/${this.target}/${key}`);
  }
  objectToList(value: Object): FirebaseObjectObservable<any> {
    return this.getObject(this.getList().push(value).key);
  }
}
