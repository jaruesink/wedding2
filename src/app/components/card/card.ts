import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'card',
  styleUrls: ['./card.css'],
  template: `
  <div class="row">
    <div class="col s12 m1 l1"></div>
    <div class="col s12 m10 l10">
      <div class="card" [ngClass]="{'active': isActive}">
        <a class="btn-floating btn-small" (click)="closeCard()"><i class="material-icons">close</i></a>
        <ng-content></ng-content>
      </div>
    </div>
    <div class="col s12 m1 l1"></div>
  </div>
  `
})
export class Card implements OnInit, OnDestroy {
  isActive: boolean;
  constructor(private router: Router) {}
  closeCard() {
    this.isActive = false;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 500);
  }
  ngOnInit() {
    setTimeout(() => {
      this.isActive = true;
    },50);
  }
  ngOnDestroy() {
    this.isActive = false;
  }
}
