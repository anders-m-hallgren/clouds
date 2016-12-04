import {Component,ViewEncapsulation} from '@angular/core';
//import {CORE_DIRECTIVES, FORM_DIRECTIVES} from '@angular/common';
//mport {Slide} from './slide.component';
import {SlideShowComponent} from './slideshow.component';
//import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';


/*Angular 2 Carousel - Gallery*/
@Component({
    selector: 'carousel-app',
    templateUrl:'carousel.component.html',
    styleUrls: ['carousel.component.css'],
    //encapsulation: ViewEncapsulation.Emulated
    //styleUrls: ['./bootstrap.css'],
    //encapsulation: ViewEncapsulation.Native
    //directives: [Slide,Carousel, CORE_DIRECTIVES, FORM_DIRECTIVES],
})
export class Carousel  {
    //The time to show the next photo
    private NextPhotoInterval:number = 3000;
    //Looping or not
    private noLoopSlides:boolean = false;
    //Photos
    private slides:Array<any> = [];

    constructor() {
            this.addNewSlide();
    }

    private addNewSlide() {
         this.slides.push(
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide1.jpg',text:'digital transformation'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide2.jpg',text:'digital crossroad'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide3.jpg',text:'digital needs'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide4.jpg',text:'4'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide5.jpg',text:'5'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide6.jpg',text:'6'},
            {image:'https://s3.eu-central-1.amazonaws.com/clouds-images/slides/Slide7.jpg',text:'7'}
        );
    }
}