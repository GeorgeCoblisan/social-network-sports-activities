import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'events',
    loadChildren: () => import('./social-events/social-events.module').then(m => m.SocialEventsModule)
  },
  {
    path:'activity',
    loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule)
  },
  {
    path:'forum',
    loadChildren: () => import('./forum/forum.module').then(m => m.ForumModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
