import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Navspinner } from './navspinner.component';
//import {MyComponent} from './my.component';

const routes: Routes = [
      {path: 'navspinner', component: Navspinner}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class NavspinnerRoutingModule { }
