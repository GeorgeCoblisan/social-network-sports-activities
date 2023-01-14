import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Navbar } from './navbar.component';

@NgModule({
  declarations: [Navbar],
  imports: [RouterModule],
  exports: [Navbar],
})
export class NavbarModule {}
