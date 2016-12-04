import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideShowComponent } from './slideshow.component';
import { Carousel } from './carousel.component';
import { Slide } from './slide.component';
import { CarouselRoutingModule } from './carousel-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselRoutingModule
  ],
  declarations: [
    SlideShowComponent,
    Carousel,
    Slide
  ],
  exports: [Carousel, SlideShowComponent, Slide]
})
export class CarouselModule { }
