import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  public series = [];
  public selectedSeries: any;
  ref = firebase.database().ref('series/');

  constructor() {
    this.ref.on('value', resp => {
      this.series = [];
      this.series = snapshotToArray(resp);
      console.log(this.series);
    });
  }

  addSeries(series) {
    series['user'] = firebase.auth().currentUser.email;
    return firebase.database().ref('series/').push(series);
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];

  snapshot.forEach(childSnapshot => {
      let item = childSnapshot.val();
      item.key = childSnapshot.key;
      returnArr.push(item);
  });
  return returnArr;
};
