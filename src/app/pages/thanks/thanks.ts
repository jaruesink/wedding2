    import { Component } from '@angular/core';
    import { AngularFire, FirebaseListObservable } from 'angularfire2';
    import { ActivatedRoute } from '@angular/router';

    @Component({
      selector: 'sd-thanks',
      styleUrls: ['thanks.css'],
      templateUrl: 'thanks.html'
    })
    export class Thanks {
      params: any;
      coming: any;
      constructor(public route: ActivatedRoute) {
        this.params = this.route.params.subscribe(
          params => {
            this.coming = params['coming'] && params['coming'].toLowerCase() === 'true';
          }
        );
      }
    }
