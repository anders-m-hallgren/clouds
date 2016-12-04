import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Carousel } from './carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
//import {NgbCarousel} from '@ng-bootstrap/ng-bootstrap/carousel';

const routes: Routes = [
      {path: 'carousel', component: Carousel}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class CarouselRoutingModule { }
