import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Forum } from './forum.page';

import { ForumRoutingModule } from './forum-routing.module';
import { NavbarModule } from '../navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForumRoutingModule,
    NavbarModule
  ],
  declarations: [Forum]
})
export class ForumModule {}
