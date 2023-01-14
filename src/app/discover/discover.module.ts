import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Discover } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { Navbar } from '../navbar/navbar.component';

@NgModule({
  declarations: [Discover, Navbar],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule {}
