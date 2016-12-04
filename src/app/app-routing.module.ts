import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselModule } from './cloudsSE/carousel/carousel.module';
import { HomeModule } from './cloudsSE/home/home.module';
import { CoolAppModule } from './cloudsSE/coolApp/coolApp.module';
import { SitebarModule } from './cloudsSE/sitebar/sitebar.module';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
      //{path: 'coolApp', component: CoolAppModule},
      //{path: 'home', component: HomeComponent},
      //{path: 'carousel', component: AngularCarousel},
      {path: 'home', loadChildren: './app/cloudsSE/home/home.module#HomeModule'},
      {path: '', redirectTo: 'carousel', pathMatch: 'full'},
      //{path: 'sitebar', component: Sitebar}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    CarouselModule,
    CoolAppModule,
    SitebarModule,
   // NgbModule.forRoot()
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  declarations:[
  ]
})
export class AppRoutingModule { }
