import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoolAppComponent } from './coolApp.component';

const routes: Routes = [
      {path: 'coolApp', component: CoolAppComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class CoolAppRoutingModule { }
