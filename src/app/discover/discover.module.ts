import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Discover } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';

@NgModule({
  declarations: [Discover],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule {}
