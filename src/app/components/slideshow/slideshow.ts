import { Component, OnDestroy, AfterViewChecked } from '@angular/core';
import { SlideshowService } from '../../services/slideshow.service';

@Component({
  selector: 'slideshow',
  styleUrls: ['./slideshow.css'],
  template: `
    <div class="slideshow">
      <span *ngIf="loading" class="loading-screen">
        <div class="sk-folding-cube">
          <div class="sk-cube1 sk-cube"></div>
          <div class="sk-cube2 sk-cube"></div>
          <div class="sk-cube3 sk-cube"></div>
          <div class="sk-cube4 sk-cube"></div>
        </div>
      </span>
      <div *ngIf="!loading">
        <div class="slides" *ngFor="let slide of slideshowService.slides; let i = index" [ngStyle]="{'background-image': 'url('+slide.path+')'}" [ngClass]="{'active': slideshowService.slides[i].isActive, 'next': slideshowService.slides[i].isNext}"></div>
      </div>
    </div>
  `
})
export class Slideshow implements OnDestroy, AfterViewChecked {
  loading: boolean = true;
  constructor(public slideshowService: SlideshowService) {
    this.slideshowService.initiateSlideshow();
  }
  ngAfterViewChecked() {
    setTimeout(() => {this.loading = false;});
  }
  ngOnDestroy() {
    this.slideshowService.slides[this.slideshowService.currentSlide].isActive = false;
    this.slideshowService.slides[this.slideshowService.nextSlide].isNext = false;
    this.slideshowService.pauseSlideshow();
    console.log('destroying');
   }
}
