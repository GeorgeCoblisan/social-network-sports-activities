import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { SelectCategory } from './selectCategory.component';
import { SelectCategoryRoutingModule } from './selectCategory-routing.module';

@NgModule({
  declarations: [SelectCategory],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCategoryRoutingModule
  ]
})
export class SelectCategoryModule {}
