import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Sitebar } from './sitebar.component';
//import {MyComponent} from './my.component';

const routes: Routes = [
      {path: 'sitebar', component: Sitebar}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class SitebarRoutingModule { }
