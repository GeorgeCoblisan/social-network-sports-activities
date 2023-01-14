import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SelectCategory } from './selectCategory.component';

const routes: Routes = [
  {
    path: '',
    component: SelectCategory,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SelectCategoryRoutingModule { }
