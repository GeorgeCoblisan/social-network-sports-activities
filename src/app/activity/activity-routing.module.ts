import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Activity } from './activity.page';

const routes: Routes = [
  {
    path: '',
    component: Activity,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
