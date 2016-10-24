import { Component } from '@angular/core';

@Component({
  selector: 'homemenu',
  styleUrls: ['./homemenu.css'],
  template: `
    <div class="homemenu" [ngClass]="{'active': isActive}">
      <a class="btn-floating btn-large waves-effect waves-light" (click)="toggleMenu()">
        <i *ngIf="!isActive" class="material-icons">menu</i>
        <i *ngIf="isActive" class="material-icons">close</i>
      </a>
      <ul>
        <li>
          <a class="waves-effect waves-light btn" routerLink="/ourstory" (click)="toggleMenu()">Our Story
          </a>
        </li>
        <li>
          <a class="waves-effect waves-light btn" routerLink="/weddingplans" (click)="toggleMenu()">Wedding Plans
          </a>
        </li>
        <li>
          <a class="waves-effect waves-light btn" href="http://www.target.com/gift-registry/registry/lJJfdOaIMlw_jI_St8EKcA" target="_blank">Target Registry
          </a>
        </li>
        <li>
          <a class="waves-effect waves-light btn" href="http://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&registryId=543778909" target="_blank">Bed Bath & Beyond Registry
          </a>
        </li>
        <li>
          <a class="waves-effect waves-light btn" routerLink="/rsvp" (click)="toggleMenu()">RSVP
          </a>
        </li>
      </ul>
      <div class="overlay" (click)="toggleMenu()"></div>
    </div>
  `
})
export class Homemenu {
  isActive:boolean = false;
  toggleMenu() {
    this.isActive = !this.isActive;
  }
  constructor() { }
}
