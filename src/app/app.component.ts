import { Component } from '@angular/core';
import { SlideshowService } from './services/slideshow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SlideshowService]
})
export class AppComponent { }
