import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CloudAppComponent } from './cloudApp.component';

const routes: Routes = [
      {path: 'cloudApp', component: CloudAppComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule  
  ]
})
export class CloudAppRoutingModule { }
