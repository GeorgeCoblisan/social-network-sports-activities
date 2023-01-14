import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Discover } from './discover.component';
import { DiscoverRoutingModule } from './discover-routing.module';
import { Navbar } from '../navbar/navbar.component';
import { SearchBar } from '../searchBar/searchBar.component';

@NgModule({
  declarations: [Discover, Navbar, SearchBar],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiscoverRoutingModule
  ]
})
export class DiscoverModule {}
