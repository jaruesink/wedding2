import { Component, OnDestroy } from '@angular/core';
import { SlideshowService } from '../../services/slideshow.service';

@Component({
  selector: 'SlideActions',
  styleUrls: ['./slideactions.css'],
  template: `
    <div class="bottombar">
      <div class="slideactions">
        <a (click)="slideshowService.previousSlide()"><i class="material-icons">fast_rewind</i></a>
        <a (click)="slideshowService.playSlideshow()" *ngIf="slideshowService.isPaused"><i class="material-icons">play_arrow</i></a>
        <a (click)="slideshowService.pauseSlideshow()" *ngIf="!slideshowService.isPaused"><i class="material-icons">pause</i></a>
        <a (click)="slideshowService.advanceSlide()"><i class="material-icons">fast_forward</i></a>
      </div>
      <div class="timeremaining">
        <span class="hide-on-med-and-up">
          {{shortmessage}}
        </span>
        <span class="hide-on-small-only">
          {{longmessage}}
        </span>
      </div>
    </div>
  `
})
export class SlideActions implements OnDestroy {
  today: Date = new Date();
  dayOf: Date = new Date(2017,0,15);
  diff: number = this.dayOf.getTime()-this.today.getTime();
  daysRemaining: number = Math.floor(this.diff/(1000*60*60*24));
  isPast: boolean = (this.today.getTime() > this.dayOf.getTime());
  shortmessage: string;
  longmessage: string;
  constructor(public slideshowService: SlideshowService) {
    if( this.isPast ) {
      this.longmessage = Math.abs(this.daysRemaining) + ' days since we tied the knot!';
      this.shortmessage = Math.abs(this.daysRemaining) + ' Days Since!';
    } else {
      this.longmessage = this.daysRemaining + ' days until we tie the knot!';
      this.shortmessage = this.daysRemaining + ' Days Until!';
    }
  }
  ngOnDestroy() {}
}
