import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { OurStory } from './pages/ourstory/ourstory';
import { WeddingPlans } from './pages/weddingplans/weddingplans';
import { RSVP } from './pages/rsvp/rsvp';
import { Thanks } from './pages/thanks/thanks';
import { Coming } from './pages/coming/coming';
import { Card } from './components/card/card';
import { Homemenu } from './components/homemenu/homemenu';
import { Slideshow } from './components/slideshow/slideshow';
import { SlideActions } from './components/slideshow/slideactions';

export const Components = [
  HomeComponent, OurStory, WeddingPlans, RSVP, Thanks, Coming, Card, Homemenu,
  Slideshow, SlideActions
];

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'ourstory', component: OurStory },
  { path: 'weddingplans', component: WeddingPlans },
  { path: 'rsvp', component: RSVP },
  { path: 'thanks', component: Thanks },
  { path: 'coming', component: Coming },
  { path: '**', component: HomeComponent }
];

export const Routing = [
  RouterModule.forRoot(routes),
];