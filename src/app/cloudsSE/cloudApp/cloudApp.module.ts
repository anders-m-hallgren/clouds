import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloudAppComponent } from './cloudApp.component';
import { CloudAppRoutingModule } from './cloudApp-routing.module';
import { AdvisoryComponent } from '../advisory/advisory.component';

@NgModule({
  imports: [
    CommonModule,
    CloudAppRoutingModule
  ],
  declarations: [
    CloudAppComponent,
    AdvisoryComponent,
  ],
  exports: [
    CloudAppComponent,
    AdvisoryComponent,
  ]
})
export class CloudAppModule { }
