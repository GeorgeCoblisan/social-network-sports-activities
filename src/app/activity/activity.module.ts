import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Activity } from './activity.page';

import { ActivityRoutingModule } from './activity-routing.module';
import { Navbar } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActivityRoutingModule,
    NavbarModule
  ],
  declarations: [Activity]
})
export class ActivityModule {}
