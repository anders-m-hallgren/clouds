import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material';
//import {AngularFireModule} from 'angularfire2';


import { AppComponent } from './app.component';
import { FrontComponent } from './cloudsSE/front/front.component';
//import { FrontModule} from './cloudsSE/front/front.module';

/*Feature module*/
import { CarouselModule } from './cloudsSE/carousel/carousel.module';
import {FrontModule} from './cloudsSE/front/front.module';

/*Routing module*/
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    //AppComponent,
    FrontComponent
  ],
  imports: [
    BrowserModule,
    FrontModule,
    //AppRoutingModule,
    //FormsModule
   // HttpModule,
   // MaterialModule.forRoot(),
    
    /*AngularFireModule.initializeApp({
      apiKey: "AIzaSyDFbuKX0UeXje-PRAvwIymYo2jk-uGqMa4",
      authDomain: "test-bc800.firebaseapp.com",
      databaseURL: "https://cloudsse-chat.firebaseio.com/",
      storageBucket: ""
    }),*/
    //{ path: '/fire', component: NgFireAppComponent },
    //{ path: '/sitebar', component: Sitebar },
    //{path: '/todo', component: TodoComponent},
    //{ path: '/hero', component: HeroComponent },
    //{ path: '/coolApp', component: CoolApp },
    //{ path: '/carousel', component: AngularCarousel },
    //{ path: '/toolbar', component: ToolbarDemo },
    //{ path: '/button', component: ButtonDemo },
    //{ path: '/tab', component: TabDemo },
    //{ path: '/list', component: ListDemo },
    //{ path: '/chat', component: FirebaseChatComponent },
    //{ path: '/sidenav', component: SidenavDemo },
    //{ path: '/cycle', component: CycleComponent },
    //{ path: '/store', component: StoreComponent }
    
  ],
  providers: [],
  bootstrap: [
    //AppComponent,  //comment this to remove the App router
    FrontComponent]
})
export class AppModule { }
