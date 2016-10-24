import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'sd-coming',
  styleUrls: ['coming.css'],
  templateUrl: 'coming.html'
})
export class Coming {
  rsvps: FirebaseListObservable<any[]>;
  coming: Array<any> = [];
  not_coming: Array<any> = [];
  count: number = 0;
  welcome_count: number = 0;
  constructor(public af: AngularFire) {
    this.rsvps = af.database.list('/submissions');
    this.rsvps.subscribe(snapshot => {
      this.update_list(snapshot);
    })
  }
  update_list(rsvps) {
    rsvps.forEach(rsvp => {
      rsvp.seats_saved ? this.count += rsvp.seats_saved : null;
      rsvp.seats_saved && rsvp.welcome ? this.welcome_count += rsvp.seats_saved : null;
      rsvp.coming ? this.coming.push(rsvp) : this.not_coming.push(rsvp);
    });
  }
}