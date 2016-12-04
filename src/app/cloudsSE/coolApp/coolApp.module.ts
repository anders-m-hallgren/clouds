import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoolAppComponent } from './coolApp.component';
import { CoolAppRoutingModule } from './coolApp-routing.module';
import { HeroComponent } from '../hero/hero.component';

@NgModule({
  imports: [
    CommonModule,
    CoolAppRoutingModule
  ],
  declarations: [
    CoolAppComponent,
    HeroComponent,
  ],
  exports: [
    CoolAppComponent,
    HeroComponent,
  ]
})
export class CoolAppModule { }
