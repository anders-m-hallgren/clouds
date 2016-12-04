import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavspinnerRoutingModule } from './navspinner-routing.module';
//import { MyComponent } from './my.component';
import { Navspinner } from './navspinner.component';

@NgModule({
  imports: [
    CommonModule,
    NavspinnerRoutingModule
  ],
  declarations: [
    Navspinner,
    //MyComponent
  ],
  exports: [Navspinner]
})
export class NavspinnerModule { }
