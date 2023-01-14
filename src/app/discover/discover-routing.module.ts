import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { Navbar } from '../navbar/navbar.component';
import { Discover } from './discover.component';

const routes: Routes = [
  {
    path: '',
    component: Discover,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiscoverRoutingModule { }
