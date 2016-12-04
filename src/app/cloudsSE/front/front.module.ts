import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { HomeComponent } from './home.component';
import { FrontComponent } from './front.component';
import { CloudblueDirective } from './cloudblue.directive';
import { TitleComponent } from './title.component';
import { SubtitleComponent } from './subtitle.component';

import { ContactComponent } from './contact/contact.component';
import { AwesomePipe } from './contact/awesome.pipe';
import { HighlightDirective } from './contact/highlight.directive';

import { Contact, ContactService } from './contact/contact.service';
import { UserService }    from './user.service';

import { SitebarModule } from '../sitebar/sitebar.module';
import { Sitebar } from '../sitebar/sitebar.component';

import { CarouselModule } from '../carousel/carousel.module';
import { Carousel } from '../carousel/carousel.component';
import { SlideShowComponent } from '../carousel/slideshow.component';
import { Slide } from '../carousel/slide.component';

import { NavspinnerModule } from '../navspinner/navspinner.module';
import { Navspinner } from '../navspinner/navspinner.component';

import { CloudAppModule } from '../cloudApp/cloudApp.module';
import { CloudAppComponent } from '../cloudApp/cloudApp.component';
import { AdvisoryComponent } from '../advisory/advisory.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SitebarModule,
    CarouselModule,
    NavspinnerModule,
    CloudAppModule
  ],
  declarations: [
    //FrontComponent,
    CloudblueDirective,
    TitleComponent,
    SubtitleComponent,
    AwesomePipe,
    ContactComponent,
    HighlightDirective
  ],
  exports: [
    //HomeComponent,
    Sitebar,
    SlideShowComponent,
    Slide,
    Carousel,
    Navspinner,
    CloudAppComponent,
    AdvisoryComponent,
    CloudblueDirective,
    TitleComponent,
    SubtitleComponent,
    //AwesomePipe,
    //ContactComponent,
    //HighlightDirective
  ],
  providers: [ ContactService, UserService ],
})
export class FrontModule { }
