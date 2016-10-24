import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  selector: 'sd-home',
  styleUrls: ['home.component.css'],
  template: `
  <main>
    <SlideActions></SlideActions>
  </main>`
})
export class HomeComponent {
  constructor() { }
}
