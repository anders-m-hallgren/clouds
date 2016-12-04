import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SitebarRoutingModule } from './sitebar-routing.module';
//import { MyComponent } from './my.component';
import { Sitebar } from './sitebar.component';

@NgModule({
  imports: [
    CommonModule,
    SitebarRoutingModule
  ],
  declarations: [
    Sitebar,
    //MyComponent
  ],
  exports: [Sitebar]
})
export class SitebarModule { }
