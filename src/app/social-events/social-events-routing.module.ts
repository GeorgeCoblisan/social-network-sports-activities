import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateEventComponent } from './create-event/create-event.component';
import { Discover } from './discover/discover.component';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { EventsFeedComponent } from './events-feed/events-feed.component';
import { EventsJoinComponent } from './events-join/events-join.component';
import { EventsMapComponent } from './events-map/events-map.component';
import { EventsRewardComponent } from './events-reward/events-reward.component';
import { SelectCategory } from './selectCategory/selectCategory.component';


const routes: Routes = [
  {
    path: 'feed',
    component: EventsFeedComponent,
  },
  {
    path: 'join',
    component: EventsJoinComponent,
  },
  {
    path: 'map',
    component: EventsMapComponent,
  },
  {
    path: 'calendar',
    component: EventsCalendarComponent,
  },
  {
    path: 'create',
    component: CreateEventComponent,
  },
  {
    path: 'reward',
    component: EventsRewardComponent,
  },
  {
    path: 'select-category',
    component: SelectCategory,
  },
  {
    path: 'discover',
    component: Discover,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SocialEventsRoutingModule {}
