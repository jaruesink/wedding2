import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'sd-rsvp',
  styleUrls: ['rsvp.css'],
  templateUrl: 'rsvp.html'
})
export class RSVP {
  passcode_correct: boolean = false;
  check_yes: any = true;
  welcome_yes: any = true;
  check_no: any;
  welcome_no: any;
  guest_name: any;
  seats_saved: any;
  song_request: any;
  submissions: FirebaseListObservable<any[]>;
  constructor(public af: AngularFire, public router: Router) {
    this.submissions = af.database.list('/submissions');
  }
  checkPasscode(input_value: string) {
    if (input_value.toLowerCase() === 'stella') {
      this.passcode_correct = true;
    }
  }
  checkboxClick(yes_box: boolean) {
    if (yes_box) {
      this.check_yes ? this.check_no = true : this.check_no = false;
    } else {
      this.check_no ? this.check_yes = true : this.check_yes = false;
    }
  }
  welcomeClick(yes_box: boolean) {
    if (yes_box) {
      this.welcome_yes ? this.welcome_no = true : this.welcome_no = false;
    } else {
      this.welcome_no ? this.welcome_yes = true : this.welcome_yes = false;
    }
  }
  formSubmit({guest_name, check_yes, welcome_yes, seats_saved = 0, song_request = null}) {
    let coming; check_yes ? coming = true : coming = false;
    let welcome; welcome_yes ? welcome = true : welcome = false;
    let entry = { guest_name, coming, welcome, seats_saved, song_request }
    this.submissions.push(entry);
    this.router.navigate(['/thanks', { 'coming': coming }]);
  }
}
