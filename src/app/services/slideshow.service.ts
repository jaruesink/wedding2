import {Injectable} from '@angular/core';

const slides = [
  { 'path': 'assets/images/desktop/pic1.jpg' },
  { 'path': 'assets/images/desktop/pic2.jpg' },
  { 'path': 'assets/images/desktop/pic3.jpg' },
  { 'path': 'assets/images/desktop/pic4.jpg' },
  { 'path': 'assets/images/desktop/pic5.jpg' },
  { 'path': 'assets/images/desktop/pic6.jpg' },
  { 'path': 'assets/images/desktop/pic7.jpg' },
  { 'path': 'assets/images/desktop/pic8.jpg' },
  { 'path': 'assets/images/desktop/pic9.jpg' },
  { 'path': 'assets/images/desktop/pic10.jpg' },
  { 'path': 'assets/images/desktop/pic11.jpg' },
  { 'path': 'assets/images/desktop/pic12.jpg' }
];

@Injectable()
export class SlideshowService {
  slides:Array<any> = slides;
  currentSlide:number;
  nextSlide:number;
  isPaused: boolean;
  slidesCount:number = this.slides.length;
  intervalTime:number = 5000;
  slideTimer: any;
  constructor() {}
  initiateSlideshow() {
    if (!this.currentSlide) {this.setCurrent();}
    this.slides[this.currentSlide].isActive = true;
    this.slides[this.nextSlide].isNext = true;
    setTimeout(() => {
      this.playSlideshow();
    }, this.intervalTime);
  }
  pauseSlideshow() {
    this.isPaused = true;
    clearInterval(this.slideTimer);
  }
  playSlideshow() {
    this.isPaused = false;
    this.advanceSlide();
  }
  resetTimer() {
    clearInterval(this.slideTimer);
    this.slideTimer = setInterval(() => {
      this.advanceSlide();
    }, this.intervalTime);
  }
  previousSlide() {
    this.slides[this.currentSlide].isActive = false;
    this.slides[this.nextSlide].isNext = false;
    this.nextSlide = this.currentSlide;
    this.slides[this.nextSlide].isNext = true;
    this.currentSlide === 0 ? this.currentSlide = this.slidesCount - 1 : this.currentSlide--;
    this.slides[this.currentSlide].isActive = true;
    if (!this.isPaused) this.resetTimer();
  }
  advanceSlide() {
    this.slides[this.currentSlide].isActive = false;
    this.slides[this.nextSlide].isNext = false;
    this.currentSlide = this.nextSlide;
    this.slides[this.currentSlide].isActive = true;
    this.nextSlide === this.slidesCount - 1 ? this.nextSlide = 0 : this.nextSlide++;
    this.slides[this.nextSlide].isNext = true;
    if (!this.isPaused) this.resetTimer();
  }
  setCurrent() {
    this.currentSlide = Math.floor(Math.random() * this.slidesCount);
    this.currentSlide === this.slidesCount-1 ? this.nextSlide = 0 : this.nextSlide = this.currentSlide+1;
  }
}
